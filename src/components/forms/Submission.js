import React, { useState } from 'react'
import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import FileUpload from '../FileUpload'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


//Should category be int or string?
const SUBMISSION = gql`
  mutation submitArt(
    $category: Int!
    $price: Int!
    $artist_name: String!
    $sold: Boolean!
    $description: String!
  ) {
    submitArt(
      category: $category
      price: $price
      artist_name: $artist_name
      sold: $sold
      description: $description
    ) {
      category
      price
      artist_name
      sold
      description
    }
  }
`

export { SUBMISSION }

const Submission = () => {
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [artistName, setArtistName] = useState('')
  // const [sold, setSold] = useState(''); *should include this when updating item, plan is to use radio for check-mark to verify if sold or not (boolean)
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [submitArt, { data, loading, error }] = useMutation(SUBMISSION)
  const history = useHistory()

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET)
    const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, formData)
    history.push('/dashboard')
    // submitArt({
    //   variables: { category, price, artistName, description },
    // })
  }

  if (error) {
    //? if server returns an error...
    return <div>Error....</div>
  }
  if (loading) {
    //? while art is being submitted
    return <div>Loading...</div>
  }
  if (data) {
    //todo redirect upon successful submission
  }

  return (
    <>
      <h2 style={styles.heading}>Create an Art Listing</h2>
      <Box display='flex' justifyContent='center' style={styles.textfieldbox}>
        
        <form onSubmit={onSubmit}>
          <TextField
            variant='outlined'
            label='Category'
            style={styles.textfield}
            size='small'
            fullWidth={false}
            type='text'
            name='category'
            value={category}
            placeholder='Category'
            onChange={e => setCategory(e.target.value)}
            required={true}
          />

          <TextField
            variant='outlined'
            label='Price'
            style={styles.textfield}
            size='small'
            fullWidth={false}
            type='text'
            name='price'
            value={price}
            placeholder='$1.00'
            onChange={e => setPrice(e.target.value)}
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
  },
}

export default Submission
