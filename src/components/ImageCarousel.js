import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
const useStyles = makeStyles(theme => ({
  img: {
    maxHeight: 600,
    width: 'auto',
  },
}))

const ImageCarousel = ({ info }) => {
  console.log(info)
  const classes = useStyles()
  const slides = info.images.map(img => {
    return <img key={img.id} src={img.image_url} />
  })
  console.log('slides', slides)
  return (
    <>
      {slides.length > 1 ? (
        <Carousel
          addArrowClickHandler
          arrowLeft={
            <ArrowBackIos style={{ cursor: 'pointer' }} name='arrow-left' />
          }
          arrowRight={
            <ArrowForwardIos style={{ cursor: 'pointer' }} name='arrow-right' />
          }
          // slidesPerPage={1}
          // slidesPerScroll={1}
          // itemWidth={1000}
          offset={100}
          slides={slides}
          centered
          infinite
        />
      ) : (
        <Grid container justify='center'>
          <Grid item>
            <img src={info.images[0].image_url} />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ImageCarousel
