import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import Spinner from './GraphLoading'
import ErrorMessage from './GraphErrors'
import ReloadContext from './ReloadContext'
import styled from 'styled-components'

const GET_ALL_ART = gql`
  query {
    allArts {
      id
      title
      school {
        school_name
      }
      images {
        image_url
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
    padding: '10px',
  },
  mediaTitle: {
    fontFamily: 'Barlow',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
}))

const ImageMasonry = () => {
  const { reload, setReload, setArtId } = useContext(ReloadContext)
  const { error, loading, data, refetch } = useQuery(GET_ALL_ART)
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
    return <ErrorMessage />
  }
  if (loading) {
    return <Spinner />
  }
  if (data) {
    return (
      <>
        <TopDash>
          Art enables us to find ourselves and lose ourselves at the same time
          <br />
          <Author>-Thomas Merton</Author>
        </TopDash>
        <ArtSect>
          <Grid container spacing={6} className={classes.cardWrap}>
            {data.allArts.map(art => (
              <Grid item key={art.id}>
                <Card className={classes.cardSize}>
                  <CardActionArea
                    component={Link}
                    to={`/artwork/${art.id}`}
                    onClick={() => setArtId(art.id)}
                  >
                    <CardMedia
                      component='img'
                      src={art.images[0].image_url}
                      alt={art.title === '' ? 'Untitled' : art.title}
                      title={art.title === '' ? 'Untitled' : art.title}
                    />
                    <CardContent>
                      <Typography className={classes.mediaTitle}>
                        Title: {art.title === '' ? 'Untitled' : art.title}
                      </Typography>
                      <Typography
                        className={classes.mediaTitle}
                        variant={'h6'}
                        component='p'
                      >
                        School:{' '}
                        {art.school === ''
                          ? 'School Name Needed'
                          : art.school.school_name}
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
  height: 550px;
  color: #f5f5f5;
  width: 100%;
  margin-top: -100px;
  padding: 0;
  font-size: 3rem;
`

const ArtSect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`

const Author = styled.text`
  color: orange;
`

export default ImageMasonry
