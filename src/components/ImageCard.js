import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'

const ImageCard = ({ art }) => {
  console.log(art)
  return (
    <Card>
      <CardActionArea component={Link} to={`/artwork/${art.id}`}>
        <CardMedia
          component='img'
          src={art.images[0].image_url}
          alt={art.title === '' ? 'Untitled' : art.title}
          title={art.title === '' ? 'Untitled' : art.title}
        />
        <CardContent>
          <Typography component='h2' variant='h4'>
            {art.school === '' ? 'School Name Needed' : art.school.school_name}
          </Typography>
          <Typography
            component='h3'
            variant='h5'
            style={{ fontStyle: 'italic' }}
          >
            {art.title === '' ? 'Untitled' : art.title}
          </Typography>
          <Typography component='h3' variant='h5'>
            {art.artist_name === '' ? 'Untitled' : art.artist_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ImageCard
