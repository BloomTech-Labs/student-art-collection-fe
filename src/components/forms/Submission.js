import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import {
  TextField,
  Button,
  Box,
  ListItem,
  ListItemText,
  List,
  Menu,
  MenuItem,
  InputLabel,
  FormHelperText,
  Select,
  FormControl
} from '@material-ui/core'
import FileUpload from '../FileUpload'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

//Should category be int or string?
const SUBMISSION = gql`
  mutation addArt(
    $category: ID
    $school_id: ID
    $price: Int
    $title: String
    $artistName: String
    $description: String
    $image_url: String
  ) {
    addArt(
      category: $category
      school_id: $school_id
      price: $price
      title: $title
      artist_name: $artistName
      description: $description
      image_url: $image_url
    ) {
      title
    }
  }
`

// const SUBMISSION = gql`
//     mutation addArt($input: NewArtInput) {
//         addArt(input: $input) {
//             title
//         }
//     }
// `;

// const SUBMISSION = gql`
// mutation {
//     addArt(input: {
//       category: $category,
//       price: $price,
//     }) {
//       title
//     }
//   }
// `

// const SUBMISSION = gql`
//     mutation (
//      $category: ID,
//      $school_id: ID,
//      $price: Int,
//      $title: String,
//      $artistName: String,
//      $description: String,
//      $image_url: String,
//     ) {
//         addArt(
//             category: $category,
//                school_id: $school_id,
//                price: $price,
//                title: $title,
//                artist_name: $artistName,
//                description: $description,
//                image_url: $image_url,
//         ) {
//                title
//              }
//     }
// `

// const  SUBMISSION = gql`
//   mutation {
//       addArt(newArt: {
//           category: 1
//           school_id: 1
//           title: "art"
//           description: "desc"
//           image_url: "http//example.com"
//           art_id: 2
//       }) {
//           title
//       }
//   }
// `

const CATEGORIES = gql`
  query allCategories {
    allCategories {
      id
      category
    }
  }
`

const Submission = props => {
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [artistName, setArtistName] = useState('')
  const [title, setTitle] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  // const [sold, setSold] = useState(''); *should include this when updating item, plan is to use radio for check-mark to verify if sold or not (boolean)
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [submitArt] = useMutation(SUBMISSION)
  const { error, loading, data } = useQuery(CATEGORIES)
  const history = useHistory()

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET)
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      formData
    )
console.log(price)
    await submitArt({
      variables: {
        input: {
            category,
            price: +price,
            artistName,
            description,
            title,
            school_id: props.schoolId,
            image_url: response.secure_url,
        }
      },
    })

    history.push('/dashboard')
  }

  const categoryChange = e => {
      setCategory(e.target.value)
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
          {/* <TextField
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
          /> */}

<FormControl variant="outlined">
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          displayEmpty
          value={category}
          onChange={categoryChange}
        >
         <MenuItem value=''>Art Category</MenuItem>
         {data.allCategories.map(item => <MenuItem value={item.id} key={item.id}>{item.category}</MenuItem>)}
        </Select>
      </FormControl>

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
                setPrice(e.target.value)}}
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
  },
}

export default Submission
