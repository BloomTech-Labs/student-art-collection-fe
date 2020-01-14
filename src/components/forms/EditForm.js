import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery, useMutation} from 'react-apollo';
import {TextField, Button, Box, List, ListItem, ListItemText, Menu, MenuItem} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const GET_CATEGORIES = gql`
    query {
        allCategories {
            id
            category
        }
    }
`;

const UPDATE_ART = gql`
    mutation
        updateArt(
            $id: ID!
            $title: String!
            $price: Int!
            $artist_name: String!
            $sold: Boolean
            $description: String!
        ) {
            updateArt(
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
`;

const EditForm = (props) => {
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
    

    
    const id = props.info.art.id 
    const [price, setPrice] = useState(props.info.art.price);
    const [artistName, setArtistName] = useState(props.info.art.artist_name);
    const [description, setDescription] = useState(props.info.art.description);
    const [title, setTitle] = useState(props.info.art.title)
    
    const [selectedIndex, setSelectedIndex] = useState(props.info.art.category.id -1)
    const [anchorEl, setAnchorEl] = useState(null);
    const [category, setCategory] = useState(props.info.art.category.id);
    const {error, loading, data} = useQuery(GET_CATEGORIES);
    
    const [updateArt] = useMutation(UPDATE_ART);
    
    const history = useHistory()

    const handleClickListItem = event => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index)
        setCategory(index+1)
        setAnchorEl(null)
    };
    
    const handleClose = () => {
        setAnchorEl(null)
    }
    
    // const onSubmit = async event => {
    //     event.preventDefault()
    //     await updateArt({
    //         variables: {
    //             id,
    //             price,
    //             artist_name: artistName,
    //             description,
    //             title
    //         }
    //     })
    //     .then(() => {
    //         history.push(`/admin/artwork/${id}`)
    //     })
    // }

    if (error) {
       return <h1>Failed to load categories, item cannot be updated!</h1>
    }

    if (loading) {
       return <h1>Loading categories</h1>
    }

    if (data) {
        return (
            <>
                <h2 style={styles.heading}>Update an Art Listing</h2>
                <Box display='flex' justifyContent='center' style={styles.textfieldbox}>
                <form >
                    <List aria-label='Selecting a category'>
                        <ListItem
                            button
                            aria-haspopup='true'
                            aria-controls='choice-menu'
                            aria-label='Selected category'
                            onClick={handleClickListItem}
                        >
                            <ListItemText button primary="Select a category" secondary={data.allCategories[selectedIndex].category} />
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
                                disabled={index === 0}
                                selected={index === selectedIndex}
                                onClick={event => handleMenuItemClick(event, index)}
                            >{item.category}
                            </MenuItem>
                        ))}
                    </Menu>
    
                    <TextField
                    variant='outlined'
                    label='Title'
                    style={styles.textfield}
                    size='small'
                    fullWidth={false}
                    type='text'
                    name='title'
                    value={title}
                    placeholder='title'
                    onChange={e => setTitle(e.target.value)}
                    required={true}
                    />  
    
                    <TextField
                    variant='outlined'
                    label='Price'
                    style={styles.textfield}
                    size='small'
                    fullWidth={false}
                    type='number'
                    name='price'
                    value={price}
                    placeholder='price'
                    onChange={e => setPrice(Number(e.target.value))}
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
                    <Box
                    display='flex'
                    justifyContent='center'
                    >
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
        );
    }
}

export default EditForm;