import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import ImageCard from './ImageCard'

const useStyles = makeStyles(theme => ({
  displayWidth: {
    maxWidth: '60%',
    margin: '0 auto',
  },
  card: {
    maxWidth: '800px',
  },
}))

const ImageMasonry = ({ data }) => {
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
        {data.allArts.map(art => (
          <Grid item key={art.id} className={classes.card}>
            <ImageCard art={art} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default ImageMasonry
