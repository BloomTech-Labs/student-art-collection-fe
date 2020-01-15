import React, { useState, useContext } from 'react'
import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { TextField, Button, Box } from '@material-ui/core'
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
  console.log(`props >>>`, props)
  const { setReload } = useContext(ReloadContext)
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [artistName, setArtistName] = useState('')
  const [title, setTitle] = useState('')
  // const [sold, setSold] = useState(''); *should include this when updating item, plan is to use radio for check-mark to verify if sold or not (boolean)
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const history = useHistory()

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
        console.log(`vars >>>`, variables)
        submitArt({ variables: variables })
      })
      .then(() => {
        setReload(true)
        history.push('/admin/dashboard')
      })
  }

  return (
    <>
      <h2 style={styles.heading}>Create an Art Listing</h2>
      <Box display='flex' justifyContent='center' style={styles.textfieldbox}>
        <form onSubmit={onSubmit}>
          <CategorySelection cat={category} setCat={setCategory} />

          <TextField
            variant='outlined'
            label='Price'
            style={styles.textfield}
            size='small'
            fullWidth={false}
            type='text'
            name='price'
            value={price}
            placeholder='1.00'
            onChange={e => {
              console.log(price)
              setPrice(e.target.value)
            }}
            required={true}
          />

          <TextField
            variant='outlined'
            label='Artist Name'
            style={styles.textfield}
            size='small'
            fullWidth={false}
            type='text'
            name='artistName'
            value={artistName}
            placeholder='Artist Name'
            onChange={e => setArtistName(e.target.value)}
            required={true}
          />

          <TextField
            variant='outlined'
            label='Title'
            style={styles.textfield}
            size='small'
            fullWidth={false}
            type='text'
            name='title'
            value={title}
            placeholder='Title'
            onChange={e => setTitle(e.target.value)}
            required={true}
          />

          <TextField
            variant='outlined'
            label='Description'
            style={styles.textfield}
            size='small'
            fullWidth={true}
            type='text'
            name='description'
            value={description}
            placeholder='Description'
            onChange={e => setDescription(e.target.value)}
            required={true}
          />
          <Box display='flex' justifyContent='center'>
            <FileUpload setFile={setFile} />
          </Box>
          <Box display='flex' justifyContent='center'>
            <Button
              variant='contained'
              style={styles.button}
              color='primary'
              type='submit'
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}

const styles = {
  heading: {
    fontFamily: 'Barlow',
    margin: '80px 15px 25px 45px',
    textAlign: 'center',
  },
  textfield: {
    margin: 15,
  },
  button: {
    margin: 15,
    background: '#3CBBB1'
  },
  dropdown: {
    margin: 15,
  },
}

export default Submission
