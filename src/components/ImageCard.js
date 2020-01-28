import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'

const ImageCard = ({ art }) => (
  <Card>
    <CardActionArea component={Link} to={`/artwork/${art.id}`}>
      <CardMedia
        component='img'
        src={art.images[0].image_url}
        alt={art.title === '' ? 'Untitled' : art.title}
        title={art.title === '' ? 'Untitled' : art.title}
      />
      <CardContent>
        <Typography component='h2' variant='body1'>
          Title: {art.title === '' ? 'Untitled' : art.title}
        </Typography>
        <Typography component='h3' variant='h4'>
          School:{' '}
          {art.school === '' ? 'School Name Needed' : art.school.school_name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

export default ImageCard
