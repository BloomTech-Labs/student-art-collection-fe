import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import InfoIcon from '@material-ui/icons/Info'
import {
  makeStyles,
  // Paper,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  // CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core'

//todo grab title and school associated with image, add to map
//todo clicking image takes user to the artwork's page
//todo maybe tweak the text overlay
//todo maybe change the info icon

const GET_IMAGES = gql`
  query {
    allImages {
      id
      image_url
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
  const { error, loading, data } = useQuery(GET_IMAGES)
  const classes = useStyles()

  if (error) {
    return <div>Error...</div>
  }
  if (loading) {
    return <div>Loading....</div>
  }
  if (data) {
    return (
      <main className={classes.root}>
        <Grid container spacing={3} alignItems='center' justify='center'>
          {data.allImages.map(img => (
            <Grid item key={img.id}>
              <Card>
                <CardActionArea className={classes.actionArea}>
                  <CardMedia
                    component='img'
                    src={img.image_url}
                    alt={img.image_url}
                    title={img.image_url}
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
                        <p>Title</p>
                        <p>School</p>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <CardActions>
                        <IconButton>
                          <InfoIcon className={classes.icon} />
                        </IconButton>
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
