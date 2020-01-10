import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import { Card, Grid, CardActionArea, CardMedia } from '@material-ui/core'
import { Link } from 'react-router-dom';

const GET_SCHOOL_INFO = gql`
query school ($id: ID!){
    school(id: $id){
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

    
    const { error, loading, data } = useQuery(GET_SCHOOL_INFO, {variables: { id:1 }})

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
            <div>
                Welcome, {data.school.school_name}
                <div>
                {data.school.city}    || Grades 9-12
                </div>
                {/* For a future release canvas we should add the edit profile button with a component that allows the school to do so and maybe add the grades to the database if we think it could be useful */}
            </div>

            <div>
                School Artwork

                {data.school.art.map(listings => (

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
            </div>
            </>
        )}
}

export default Dashboard;