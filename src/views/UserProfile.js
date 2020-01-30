import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { makeStyles, Card, Grid, Typography } from '@material-ui/core'
import { EditProfile, ErrorMessage, Spinner } from '../components'

const GET_SCHOOL_INFO = gql`
  query {
    school(id: 1) {
      school_name
      email
      address
      city
      zipcode
    }
  }
`

const useStyles = makeStyles(theme => ({
  background: {
    height: '100vh',
    backgroundColor: '#266863',
  },
  title: {
    margin: '20px 0',
    color: '#fff',
  },
}))

const UserProfile = () => {
  const { error, loading, data } = useQuery(GET_SCHOOL_INFO)
  const classes = useStyles()

  if (error) {
    return <ErrorMessage />
  }
  if (loading) {
    return <Spinner />
  }
  if (data) {
    const { school } = data

    return (
      <Grid
        container
        direction='column'
        alignItems='center'
        className={classes.background}
      >
        <Grid item>
          <Typography component='h1' variant='h2' className={classes.title}>
            Update Information
          </Typography>
        </Grid>
        <Grid item>
          <Card>
            <Grid container direction='column' spacing={5}>
              <Grid item>
                <EditProfile school={school} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default UserProfile
