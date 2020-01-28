import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '80%',
    margin: '0 auto',
    padding: theme.spacing(2),
  },
  space: {
    padding: theme.spacing(2),
  },
}))

const ArtInfo = ({info}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container alignItems='center' justify='space-between'>
        <Grid item className={classes.space}>
          <Typography variant='h3'>
            {info.title === '' ? 'Untitled' : info.title}
          </Typography>
          <Typography variant='h3' component='h3'>
            Artist: {info.artist_name}
          </Typography>
          <Typography variant='h3'>{info.category.category}</Typography>
          <Typography variant='h3'>
            {info.description === ''
              ? 'No description available'
              : info.description}
          </Typography>
        </Grid>
        <Grid item className={classes.space}>
          <Typography variant='h3'>
            Suggested donation to {info.school.school_name}: ${info.price}.00
          </Typography>
          <Typography variant='h3'>
            {info.sold === false ? 'Available' : 'Not Available'}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default ArtInfo
