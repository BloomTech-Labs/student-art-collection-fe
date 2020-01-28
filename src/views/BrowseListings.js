import React, { useEffect, useContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { Grid } from '@material-ui/core'
import {
  ErrorMessage,
  Spinner,
  ReloadContext,
  ImageMasonry,
} from '../components'

const GET_ALL_ART = gql`
  query {
    allArts {
      id
      title
      school {
        school_name
      }
      images {
        image_url
      }
    }
  }
`

const BrowseListings = () => {
  const { reload, setReload, setArtId } = useContext(ReloadContext)
  const { error, loading, data, refetch } = useQuery(GET_ALL_ART)

  useEffect(() => {
    if (reload === true) {
      function update() {
        return refetch()
      }
      update()
      setReload(false)
    }
  })

  if (error) {
    return (
      <Grid container direction='column' alignItems='center' spacing={5}>
        <Grid item>Quotes</Grid>
        <Grid item>Search</Grid>
        <ErrorMessage />
      </Grid>
    )
  }
  if (loading) {
    return (
      <Grid container direction='column' alignItems='center' spacing={5}>
        <Grid item>Quotes</Grid>
        <Grid item>Search</Grid>
        <Spinner />
      </Grid>
    )
  }
  if (data) {
    return (
      <Grid container direction='column' alignItems='center' spacing={5}>
        <Grid item>Quotes</Grid>
        <Grid item>Search</Grid>
        <ImageMasonry data={data} />
      </Grid>
    )
  }
}

export default BrowseListings
