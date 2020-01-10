import React from 'react'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import InfoIcon from '@material-ui/icons/Info'
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { Spinner } from './GraphLoading'

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
  root: {
    flexGrow: 1,
  },
  image: {
    maxHeight: 300,
    width: 'auto',
  },
  actionArea: {
    maxHeight: 300,
    width: 'auto',
  },
  info: {
    position: 'relative',
    top: '-70px',
    backgroundColor: 'rgba(0,0,0,.5)',
    color: 'white',
  },
  title: {
    marginLeft: 15,
  },
  icon: {
    color: 'rgba(255,255,255,.5)',
  },
}))

const ImageMasonry = () => {
  const { error, loading, data } = useQuery(GET_ALL_ART)
  const classes = useStyles()

  if (error) {
    return <div>Error...</div>
  }
  if (loading) {
    return <Spinner />
  }
  if (data) {
    return (
      <main className={classes.root}>
        <Grid container spacing={3} alignItems='center' justify='center'>
          {data.allArts.map(art => (
            <Grid item key={art.id}>
              <Card>
                <CardActionArea
                  component={Link}
                  to={`/artwork/${art.id}`}
                  className={classes.actionArea}
                >
                  <CardMedia
                    component='img'
                    src={art.images[0].image_url}
                    alt={art.title === '' ? 'Untitled' : art.title}
                    title={art.title === '' ? 'Untitled' : art.title}
                    className={classes.image}
                  />
                  <Grid
                    container
                    justify='space-between'
                    className={classes.info}
                  >
                    <Grid item>
                      <Typography
                        variant='body2'
                        component='h3'
                        className={classes.title}
                      >
                        <p>{art.title === '' ? 'Untitled' : art.title}</p>
                        <p>
                          {art.school === ''
                            ? 'School Name Needed'
                            : art.school.school_name}
                        </p>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <CardActions>
                        <InfoIcon className={classes.icon} />
                      </CardActions>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    )
  }
}

export default ImageMasonry
