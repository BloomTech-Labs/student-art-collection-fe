import React, { useContext, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { Link } from 'react-router-dom'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core'
import styled from 'styled-components'
import ReloadContext from '../components/ReloadContext'

const GET_SCHOOL_INFO = gql`
  query schoolBySchoolId($schoolId: ID!) {
    schoolBySchoolId(school_id: $schoolId) {
      id
      school_name
      city
      art {
        id
        artist_name
        title
        price
        sold
        description
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
  }
`

const useStyles = makeStyles(theme => ({
  cardSize: {
    maxWidth: '1000px',
    maxHeight: '1000px',
  },
  cardWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
  },
  mediaTitle: {
    fontFamily: 'Barlow',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  button: {
    color: 'white', 
    background: '#3CBBB1',
    marginBottom: '50px',
    margin: 'auto',
    '&:hover': {
      backgroundColor: '#318B84',
    },
  },
}))

const Dashboard = props => {
  const { reload, setReload } = useContext(ReloadContext)
  const schoolId = props.schoolId
  const { error, loading, data, refetch } = useQuery(GET_SCHOOL_INFO, {
    variables: { schoolId },
  })
  const classes = useStyles()

  useEffect(() => {
    if (reload === true) {
      function update() {
        return refetch()
      }
      update()
      setReload(false)
    }
  })

  if (error) {
    return <div> Error Loading Dashboard...</div>
  }
  if (loading) {
    return <div> Loading Dashboard...</div>
  }
  if (data) {
    return (
      <>
        <TopDash>
          <SchoolText>Welcome, {data.schoolBySchoolId.school_name}</SchoolText>
          <TownText>{data.schoolBySchoolId.city} <Lines>||</Lines> Grades 9-12</TownText>

          {/* For a future release canvas we should add the edit profile button with a component that allows the school to do so and maybe add the grades to the database if we think it could be useful */}
        </TopDash>

        <ArtSect>
          <ListingTop>Your Student's Artwork</ListingTop>
          <Button
            id={data.schoolBySchoolId.id}
            component={Link}
            //todo refactor this to not use match.params
            //todo quick way to send that id to use in the addArt mutation instead of the firebase uid
            // to='/admin/artwork/new'
            to={`/admin/artwork/${data.schoolBySchoolId.id}/new`}
            variant='contained'
            className={classes.button}
          >
            Add New Listing
          </Button>
          <Grid container spacing={6} className={classes.cardWrap}>
            {data.schoolBySchoolId.art.map(listings => (
              <Grid item key={listings.id}>
                <Card className={classes.cardSize}>
                  <CardActionArea
                    component={Link}
                    to={`/admin/artwork/${listings.id}`}
                  >
                    <CardMedia
                      component='img'
                      src={listings.images[0].image_url}
                      alt={listings.title === '' ? 'Untitled' : listings.title}
                      title={
                        listings.title === '' ? 'Untitled' : listings.title
                      }
                    />
                    <CardContent>
                      <Typography className={classes.mediaTitle}>
                        Title:{' '}
                        {listings.title === '' ? 'Untitled' : listings.title}
                      </Typography>
                      <Typography
                        className={classes.mediaTitle}
                        variant={'h6'}
                        component='p'
                      >
                        Artist:{' '}
                        {listings.artist_name === ''
                          ? 'Untitled'
                          : listings.artist_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ArtSect>
      </>
    )
  }
}

//styling
const TopDash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: 'Barlow';
  background-color: #000;
  height: 25vh;
  color: #f5f5f5;
  width: 100%;
  padding: 0;
`

const SchoolText = styled.text`
  font-size: 3rem;
`

const TownText = styled.text`
  color: #FFAA04;
  font-size: 2.5rem;
`

const ArtSect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`

const ListingTop = styled.text`
display flex;
justify-content: center;
  font-size: 1.5rem;
  color: black;
  margin-bottom: 50px;
`
const Lines = styled.text`
  color: #3CBBB1;
`

export default Dashboard
