import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import ImageCard from './ImageCard'

const useStyles = makeStyles(theme => ({
  displayWidth: {
    maxWidth: '80%',
    margin: '0 auto',
  },
  card: {
    maxWidth: '800px',
    maxheight: '800px'
  },
}))

const ImageMasonry = ({ art }) => {
  const classes = useStyles()

  return (
    <Grid item>
      <Grid
        container
        spacing={5}
        alignItems='center'
        justify='center'
        className={classes.displayWidth}
      >
        {art.map(art => (
          <Grid item key={art.id} className={classes.card}>
            <ImageCard art={art} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default ImageMasonry
