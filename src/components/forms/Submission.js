import React, { useState, useContext } from 'react'
import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Container,
} from '@material-ui/core'
import { formStyles } from '../../styles/muiForms'
import { SubmitButton } from '../../styles/muiButtons'
import FileUpload from '../FileUpload'
import CategorySelection from '../CategorySelection'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import ReloadContext from '../ReloadContext'

const SUBMISSION = gql`
  mutation addArt(
    $category: ID!
    $school_id: ID!
    $image_url: String!
    $title: String
    $description: String
    $artist_name: String
    $price: Int
  ) {
    addArt(
      category: $category
      school_id: $school_id
      image_url: $image_url
      title: $title
      description: $description
      artist_name: $artist_name
      price: $price
    ) {
      school_id
      title
      category {
        id
        category
      }
      images {
        id
        image_url
      }
    }
  }
`

const Submission = props => {
  const { setReload } = useContext(ReloadContext)
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [artistName, setArtistName] = useState('')
  const [title, setTitle] = useState('')
  // const [sold, setSold] = useState(''); *should include this when updating item, plan is to use radio for check-mark to verify if sold or not (boolean)
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const history = useHistory()
  const classes = formStyles()

  const [submitArt] = useMutation(SUBMISSION)

  //todo refactor this to...
  //? ...not use match.params,
  //! ...and
  //? ...not use the firebase uid
  const id = props.match.params.id

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET)
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        formData
      )
      .then(res => {
        const variables = {
          category,
          price: Number(price),
          artist_name: artistName,
          description,
          title,
          school_id: id,
          image_url: res.data.secure_url,
        }
        submitArt({ variables: variables })
      })
      .then(() => {
        setReload(true)
        history.push('/admin/dashboard')
      })
  }

  return (
    <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
      <Paper elevation={0} className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Grid container direction='column' alignItems='center' spacing={4}>
            <Grid item>
              <Typography variant='h2' component='h2'>
                Create an Art Listing
              </Typography>
            </Grid>
            <Grid item>
              <form onSubmit={onSubmit}>
                <Grid
                  container
                  direction='column'
                  alignItems='center'
                  spacing={4}
                >
                  <Grid item>
                    <FileUpload setFile={setFile} />
                  </Grid>
                  <Grid item>
                    <TextField
                      label='Artist Name'
                      name='artistName'
                      placeholder='Artist Name'
                      type='text'
                      variant='outlined'
                      size='small'
                      className={classes.message}
                      required
                      value={artistName}
                      onChange={e => setArtistName(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label='Title'
                      name='title'
                      placeholder='Title'
                      type='text'
                      variant='outlined'
                      size='small'
                      className={classes.message}
                      required
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label='Price'
                      name='price'
                      placeholder='1.00'
                      type='text'
                      variant='outlined'
                      size='small'
                      className={classes.message}
                      required
                      value={price}
                      onChange={e => setPrice(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <CategorySelection cat={category} setCat={setCategory} />
                  </Grid>
                  <Grid item>
                    <TextField
                      label='Description'
                      name='description'
                      placeholder='Description'
                      type='text'
                      variant='outlined'
                      size='small'
                      multiline
                      rows={8}
                      className={classes.message}
                      required
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <SubmitButton
                      variant='contained'
                      size='medium'
                      type='submit'
                    >
                      Submit
                    </SubmitButton>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </Container>
  )
}

export default Submission
