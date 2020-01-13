import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Card, Grid, CardActionArea, CardMedia } from '@material-ui/core'
import styled from 'styled-components'


const GET_SCHOOL_INFO = gql`
query schoolBySchoolId ($id: ID!){
    schoolBySchoolId(school_id: $id){
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
const Dashboard = props => {
    console.log(props)
    const id = props.schoolId
    const { error, loading, data } = useQuery(GET_SCHOOL_INFO, {variables: { id }})

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
            <TopDash>
                <SchoolText>
                Welcome, {data.schoolBySchoolId.school_name}
                <TownText>
                    <br></br>
                    {data.schoolBySchoolId.city}    || Grades 9-12
                </TownText>
                </SchoolText>
                {/* For a future release canvas we should add the edit profile button with a component that allows the school to do so and maybe add the grades to the database if we think it could be useful */}
                <button>
                    
                </button>
            </TopDash>

            <ArtSect>
                <ListingTop>
                    School Artwork
                </ListingTop>

                {data.schoolBySchoolId.art.map(listings => (

                    <Grid item key={listings.id}>
                    <Card>
                        <CardActionArea
                            component={Link}
                            to={`/artwork/${listings.id}`}
                        >
                        
                        <CardMedia
                            component='img'
                            src={listings.images[0].image_url}
                            alt={listings.title === '' ? 'Untitled' : listings.title}
                            title={listings.title === '' ? 'Untitled' : listings.title}
                        />

                        <Grid item>
                            <p>
                                {listings.title === '' ? 'Untitled' : listings.title}
                                {listings.artist_name === '' ? 'Untitled' : listings.artist_name}
                            </p>
                        </Grid>

                    </CardActionArea>

                    </Card>
                </Grid>
                ))}
            </ArtSect>
            </>
        )}
}

//styling
const TopDash = styled.div`
    background-color: orange;
    opacity: 75%;
    border: solid 1px gray;
    text-color: white;
    padding: 2%;
    width: 100%

    
`;

const SchoolText = styled.text`
    font-size:30px;
    font-weight: 400;
    color: white;
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
align-items:center;
`;

export default Dashboard;