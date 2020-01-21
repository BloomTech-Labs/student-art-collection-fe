import React, {useState, useContext} from 'react';
import {gql} from 'apollo-boost';
import {useQuery, useMutation} from 'react-apollo';
import {
    TextField, 
    Button, 
    Box, 
    List, 
    ListItem, 
    ListItemText, 
    Menu, 
    MenuItem, 
    Checkbox,
    FormGroup,
    FormControl,
    FormControlLabel,
    FormLabel
} from '@material-ui/core';
import ErrorMessage from '../GraphErrors';
import Spinner from '../GraphLoading';
import ReloadContext from '../../components/ReloadContext';

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
`;

const EditForm = (props) => {
    // This is context to refetch the graphQL query from the database
    const {reload, setReload} = useContext(ReloadContext)
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
    }

    const id = props.info.art.id 

    // These values are pulled from props to set in the proper place for editing
    const [price, setPrice] = useState(props.info.art.price);
    const [artistName, setArtistName] = useState(props.info.art.artist_name);
    const [description, setDescription] = useState(props.info.art.description);
    const [title, setTitle] = useState(props.info.art.title)
    
    // These modify the selection of the category of the piece of art
    const [selectedIndex, setSelectedIndex] = useState(props.info.art.category.id -1)
    const [anchorEl, setAnchorEl] = useState(null);
    const [category, setCategory] = useState(props.info.art.category.id);
    const {error, loading, data} = useQuery(GET_CATEGORIES);
    
    // This modifies the truthiness of whether a piece of art is sold
    const [sold, setSold] = useState(props.info.art.sold)
    const [checked, setChecked] = useState(sold)

    const [updateArt] = useMutation(UPDATE_ART);

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
                sold
            }
        })
        if (error) {
            return <ErrorMessage />
        }
        if (loading) {
            return <Spinner />
        }
        if (data) {
            console.log('reload when submitted', reload)
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
        console.log('reload when loaded', reload)
        return (
            <>
                <h2 style={styles.heading}>Update an Art Listing</h2>
                <Box display='flex' justifyContent='center' style={styles.textfieldbox}>
                <form onSubmit={onSubmit}>
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
                                selected={index === selectedIndex}
                                onClick={event => handleMenuItemClick(event, index)}
                            >{item.category}
                            </MenuItem>
                        ))}
                    </Menu>

                    <FormControlLabel
                        value="Sold"
                        control={
                            <Checkbox 
                                checked={checked}
                                onChange={handleChecked}
                                color="primary"
                                value='primary'
                                inputProps={{'aria-label': 'When checked, this box updates the piece of art as sold'}}
                            />
                        }
                        label="Sold"
                        labelPlacement="top"
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