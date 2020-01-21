import React, { useContext, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { Link } from 'react-router-dom'
import {
  Grid,
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
  card: {
    margin: 'auto',
    boxShadow: 'none',
  },
  media: {
    width: '100',
    minHeight: '40vh',
  },
  content: {
    textAlign: 'left',
    padding: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(3),
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  mediaTitle: {
    
  },
  button: {
    color: 'white',
    background: '#3CBBB1',
    marginTop: '10px',
    marginBottom: '10px',
    textAlign: 'center',
    display: 'block',
    width: '30%',
    alignContent: 'center',
    margin: 'auto',
    '&:hover': {
        backgroundColor: '#318B84'
    }
  },
  fullHeight: {
    height: '100%',
  },
}))

const Dashboard = props => {
  console.log(`dashboard props >>>`, props)
  const { reload, setReload} = useContext(ReloadContext)
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
  }, [])

  if (error) {
    return <div> Error Loading Dashboard...</div>
  }
  if (loading) {
    return <div> Loading Dashboard...</div>
  }
  if (data) {
    console.log(`dashboard data >>>`, data)
    return (
      <>
        <div className={classes.root}>
          <TopDash>
            <SchoolText>
              Welcome, {data.schoolBySchoolId.school_name}
              <TownText>
                <br></br>
                {data.schoolBySchoolId.city} || Grades 9-12
              </TownText>
            </SchoolText>
            {/* For a future release canvas we should add the edit profile button with a component that allows the school to do so and maybe add the grades to the database if we think it could be useful */}
          </TopDash>

          <ArtSect>
            <ListingTop>School Artwork</ListingTop>

            <br></br>

            <Button
              id={data.schoolBySchoolId.id}
              component={Link}
              //todo refactor this to not use match.params
              //todo quick way to send that id to use in the addArt mutation instead of the firebase uid
              // to='/admin/artwork/new'
              to={`/admin/artwork/${data.schoolBySchoolId.id}/new`}
              size='large'
              variant='contained'
              className={classes.button}
            >
              Add New Listing
            </Button>

            {data.schoolBySchoolId.art.map(listings => (
              <Grid item key={listings.id} container spacing={2}>
                <CardContent className={classes.card}>
                  <CardActionArea
                    component={Link}
                    to={`/admin/artwork/${listings.id}`}
                  >
                    <CardMedia
                      className={classes.media}
                      component='img'
                      src={listings.images[0].image_url}
                      alt={listings.title === '' ? 'Untitled' : listings.title}
                      title={
                        listings.title === '' ? 'Untitled' : listings.title
                      }
                    />

                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.mediaTitle}
                        variant={'h6'}
                        gutterBottom
                      >
                        Title:{' '}
                        {listings.title === '' ? 'Untitled' : listings.title}
                      </Typography>
                      <Typography
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
  background-color: #000;
  opacity: 85%;
  border: solid .5px gray;
  color: #f5f5f5;
  padding: 2%;
  display: block;
`

const SchoolText = styled.text`
  font-size: 30px;
  font-weight: 400;
  color: #f5f5f5;
`

const TownText = styled.text`
  font-size: 20px;
`

const ArtSect = styled.div`
  align-content: center;
  margin: 2% 0;
`

const ListingTop = styled.text`
  font-size: 30px;
  font-weight: 400;
  color: black;
  display: flex;
  justify-content: center;
`

export default Dashboard
