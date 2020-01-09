import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  img: {
    maxHeight: 600,
    width: 'auto',
  },
}))

const ImageCarousel = ({ info }) => {
  const classes = useStyles()

  // console.log(`img info >>>`, info)

  return (
    <Grid container justify='center'>
      <Grid item>
        <img src={info[0].image_url} alt='test' className={classes.img} />
      </Grid>
    </Grid>
  )
}

export default ImageCarousel
