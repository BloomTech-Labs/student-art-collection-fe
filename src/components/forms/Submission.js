import React, { useState } from 'react'
import { useMutation } from 'react-apollo'
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
  FormControl,
} from '@material-ui/core'
import FileUpload from '../FileUpload'
import CategorySelection from '../CategorySelection'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SUBMISSION = gql`
  mutation addArt(
    $category: ID
    $school_id: ID
    $image_url: String
    $title: String
  ) {
    addArt(
      category: $category
      school_id: $school_id
      image_url: $image_url
      title: $title
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
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [artistName, setArtistName] = useState('')
  const [title, setTitle] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  // const [sold, setSold] = useState(''); *should include this when updating item, plan is to use radio for check-mark to verify if sold or not (boolean)
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const history = useHistory()

  const [data, setData] = useState()
  const [error, setError] = useState()

  const [submitArt] = useMutation(SUBMISSION)
  // const [example, { data }] = useMutation(SUBMISSION)

  const onSubmit = async e => {
    e.preventDefault()
    // const formData = new FormData()
    // formData.append('file', file)
    // formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET)
    // const response = await axios.post(
    //   `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
    //   formData
    // )
    // console.log(price)
    // submitArt({
    //   variables: {
    //     input: {
    //       category,
    //       price: +price,
    //       artistName,
    //       description,
    //       title,
    //       school_id: props.schoolId,
    //       image_url: response.secure_url,
    //     },
    //   },
    // })
    // setInput({
    //   category: 1,
    //   school_id: props.schoolId,
    // })
    const variables = {
      category: 2,
      school_id: 1,
      title: 'title',
      image_url: 'exa',
    }

    console.log(`variables >>>`, variables)
    // submitArt({ variables })
    try {
      const data = await submitArt({ variables: variables })
      setData(data)
    } catch (e) {
      setError(e)
    }
    console.log(`mutation data >>>`, data)
    console.log(`mutation error >>>`, error)

    // history.push('/dashboard')
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

          {/* <FormControl variant='outlined' size='small' style={styles.dropdown}>
            <Select
              displayEmpty
              value={category}
              onChange={categoryChange}
              required={true}
            >
              <MenuItem value=''>Art Category</MenuItem>
              {data.allCategories.map(item => (
                <MenuItem value={item.id} key={item.id}>
                  {item.category}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
          <CategorySelection cat={category} setCat={setCategory} />

          {/* <TextField
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
          /> */}

          {/* <TextField
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
          /> */}

          {/* <TextField
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
          /> */}

          {/* <TextField
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
          /> */}
          {/* <Box display='flex' justifyContent='center'>
            <FileUpload setFile={setFile} />
          </Box> */}
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
  dropdown: {
    margin: 15,
  },
}

export default Submission
