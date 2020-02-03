import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  IconButton,
  Grid,
  Typography,
} from '@material-ui/core'
import { BackButton } from '../styles/muiButtons'

const ErrorMessage = () => {
  return (
    <Card>
      <CardContent>
        <Grid container alignItems='center' justify='space-between'>
          <Grid item xs={3}>
            <IconButton
              size='small'
              children={<BackButton />}
              component={Link}
              to='/'
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant='body1' component='h2'>
              We're sorry. Something's gone wrong.
            </Typography>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ErrorMessage
