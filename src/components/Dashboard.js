import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { Link } from 'react-router-dom'
import { Grid, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Button } from '@material-ui/core'
import styled from 'styled-components'

const GET_SCHOOL_INFO = gql`
    query schoolBySchoolId($id: ID!) {
        schoolBySchoolId(school_id: $id) {
            school_name
            city
            art {
                id
                artist_name
                title
                images {
                    id
                    image_url
                }
            }
        }
    }
`

const useStyles = makeStyles(theme => ({
    card: {
        margin: 'auto',
        boxShadow: 'none'
    },
    media: {
        width: '100',
        minHeight: '40vh'
    },
    content: {
        textAlign: 'left',
        padding: theme.spacing.unit * 3
    },
    divider: {
      margin: `${theme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: 'bold'
    },
    subheading: {
        lineHeight: 1.8
    },
    mediaTitle: {
        color: '#ef6538'
    },
    button: {
        background: 'linear-gradient(45deg, #636387 30%, #464687 90%)',
        color: 'white',
        borderRadius: '4px',
        marginTop: '10px',
        marginBottom: '10px',
        textAlign: 'center',
        display: 'block',
        width: '30%',
        alignContent: 'center',
        margin: 'auto',


    },
    fullHeight: {
        height: '100%'
    }
}));

const Dashboard = props => {
    console.log(props)
    const id = props.schoolId
    const { error, loading, data } = useQuery(GET_SCHOOL_INFO, {variables: { id }})
    const classes = useStyles()

    if(error) {
        return <div> Error Loading Dashboard...</div>
    }
    if(loading) {
        return <div> Loading Dashboard...</div>
    }
    if(data){
        console.log(data);
        return (
            <>
            <div className={classes.root}>
            <TopDash>
                <SchoolText>
                Welcome, {data.schoolBySchoolId.school_name}
                <TownText>
                    <br></br>
                    {data.schoolBySchoolId.city}    || Grades 9-12
                </TownText>
                </SchoolText>
                {/* For a future release canvas we should add the edit profile button with a component that allows the school to do so and maybe add the grades to the database if we think it could be useful */}
            </TopDash>


            <ArtSect>
                <ListingTop>
                    School Artwork 
                </ListingTop>

                <br></br>
                
                <Button component = { Link } to = '/admin/artwork/new' size='large' variant='outlined' className={classes.button}>
                    Add New Listing
                </Button>


                {data.schoolBySchoolId.art.map(listings => (
                    <Grid item key={listings.id} container spacing={2}>

                        <CardContent className={classes.card}>
                            <CardActionArea component={Link} to={`/admin/artwork/${listings.id}`}>

                            <CardMedia
                                className={classes.media}
                                component='img'
                                src={listings.images[0].image_url}
                                alt={listings.title === '' ? 'Untitled' : listings.title}
                                title={listings.title === '' ? 'Untitled' : listings.title}
                            />

                            <CardContent className = {classes.content}>
                            <Typography className={classes.mediaTitle} variant={'h6'} gutterBottom>
                                Title: {listings.title === '' ? 'Untitled' : listings.title}
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                Artist: {listings.artist_name === '' ? 'Untitled' : listings.artist_name}
                            </Typography>
                            
                            </CardContent>

                            </CardActionArea>
                        </CardContent>
                    </Grid>
            ))}
        </ArtSect>
        </div>
            </>
        )
    }
}

//styling
const TopDash = styled.div`
    background-color: #56565b;
    opacity: 75%;
    border: solid 1px gray;
    text-color:  #F5F5F5;
    padding: 2%;
    display: block;
`;

const SchoolText = styled.text`
    font-size:30px;
    font-weight: 400;
    color:  #F5F5F5;
`;

const TownText = styled.text`
    font-size: 20px;
`;

const ArtSect = styled.div`
    align-content: center;
    margin: 2% 0;
`;

const ListingTop = styled.text`
    font-size:30px;
    font-weight: 400;
    color: black;
    display: flex;
    justify-content: center;

`;

export default Dashboard;
