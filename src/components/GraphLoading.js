import React, { useState, useEffect } from 'react'
import {
  Card,
  CircularProgress,
  Container,
  Grid,
  Typography,
  CardContent,
} from '@material-ui/core'

const Spinner = () => {
  const [loading, setLoading] = useState(0)

  useEffect(() => {
    const tick = () => setLoading(prev => (prev >= 100 ? 0 : prev + 1))
    const timer = setInterval(tick, 20)
    return () => clearInterval(timer)
  })

  return (
    <Container>
      <Card>
        <CardContent>
          <Grid container spacing={3} alignItems='center' justify='center'>
            <Grid item>
              <CircularProgress variant='determinate' value={loading} />
            </Grid>
            <Grid item>
              <Typography variant='body1' component='h3'>
                Loading...
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Spinner
