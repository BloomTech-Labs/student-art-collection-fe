import React, { useState, useContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from 'react-apollo'
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Grid,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Container,
} from '@material-ui/core'
import { formStyles } from '../../styles/muiForms'
import { SubmitButton } from '../../styles/muiButtons'
import ErrorMessage from '../GraphErrors'
import Spinner from '../GraphLoading'
import ReloadContext from '../../components/ReloadContext'

const GET_CATEGORIES = gql`
  query {
    allCategories {
      id
      category
    }
  }
`

const UPDATE_ART = gql`
  mutation updateArt(
    $category: ID
    $id: ID!
    $title: String!
    $price: Int!
    $artist_name: String!
    $sold: Boolean
    $description: String!
  ) {
    updateArt(
      category: $category
      id: $id
      title: $title
      price: $price
      artist_name: $artist_name
      sold: $sold
      description: $description
    ) {
      title
      price
      artist_name
      sold
      description
    }
  }
`

const EditForm = props => {
  // This is the context to refetch the graphQL query from the database
  const { setReload } = useContext(ReloadContext)

  const id = props.info.art.id

  // These values are pulled from props to set in the proper place for editing
  const [price, setPrice] = useState(props.info.art.price)
  const [artistName, setArtistName] = useState(props.info.art.artist_name)
  const [description, setDescription] = useState(props.info.art.description)
  const [title, setTitle] = useState(props.info.art.title)

  // These modify the selection of the category of the piece of art
  const [selectedIndex, setSelectedIndex] = useState(
    props.info.art.category.id - 1
  )
  const [anchorEl, setAnchorEl] = useState(null)
  const [category, setCategory] = useState(props.info.art.category.id)
  const { error, loading, data } = useQuery(GET_CATEGORIES)

  // These modify the truthiness of whether a piece of art is sold
  const [sold, setSold] = useState(props.info.art.sold)
  const [checked, setChecked] = useState(sold)

  const [updateArt] = useMutation(UPDATE_ART)

  const classes = formStyles()

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setCategory(index + 1)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChecked = () => {
    setChecked(!checked)
    setSold(!sold)
  }

  const onSubmit = async event => {
    event.preventDefault()
    await updateArt({
      variables: {
        category,
        id,
        price,
        artist_name: artistName,
        description,
        title,
        sold,
      },
    })
    if (error) {
      return <ErrorMessage />
    }
    if (loading) {
      return <Spinner />
    }
    if (data) {
      setReload(true)
      props.propData.history.replace(`/admin/dashboard`)
    }
  }

  if (error) {
    return <h1>Failed to load categories, item cannot be updated!</h1>
  }

  if (loading) {
    return <h1>Loading categories</h1>
  }

  if (data) {
    return (
      <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
        <Paper elevation={0} className={classes.root}>
          <Paper elevation={3} className={classes.paper} style={{ width: '450px' }}>
            <Grid container direction='column' alignItems='center' spacing={4}> 
              <Grid item>
                <Typography variant='h2' component='h2' gutterBottom>
                  Update an Art Listing
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
                        placeholder='title'
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
                        placeholder='price'
                        type='number'
                        variant='outlined'
                        size='small'
                        className={classes.message}
                        required
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        value='Sold'
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={handleChecked}
                            color='primary'
                            value='primary'
                            inputProps={{
                              'aria-label':
                                'When checked, this box updates a piece of art as sold',
                            }}
                          />
                        }
                        label='Sold'
                        labelPlacement='top'
                      />
                    </Grid>
                    <Grid item>
                      <List aria-label='Selecting a category'>
                        <ListItem
                          button
                          aria-haspopup='true'
                          aria-controls='choice-menu'
                          aria-label='Selected category'
                          onClick={handleClickListItem}
                        >
                          <ListItemText
                            button
                            primary='Select a category'
                            secondary={
                              data.allCategories[selectedIndex].category
                            }
                          />
                        </ListItem>
                      </List>
                      <Menu
                        id='choice-menu'
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        {data.allCategories.map((item, index) => (
                          <MenuItem
                            key={item.id}
                            selected={index === selectedIndex}
                            onClick={event => handleMenuItemClick(event, index)}
                          >
                            {item.category}
                          </MenuItem>
                        ))}
                      </Menu>
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
                    <Grid item></Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Container>
    )
  }
}

export default EditForm
