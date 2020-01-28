import React, { useEffect, useContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { makeStyles, Grid } from '@material-ui/core'
import {
  ErrorMessage,
  Spinner,
  ReloadContext,
  ImageMasonry,
} from '../components'
import { BrowseQuote } from '../components/Quotes'

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

const useStyles = makeStyles(theme => ({
  quote: {
    width: '100%',
  },
}))

const BrowseListings = () => {
  const { reload, setReload, setArtId } = useContext(ReloadContext)
  const { error, loading, data, refetch } = useQuery(GET_ALL_ART)
  const classes = useStyles()

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
      <>
        <BrowseQuote />
        <Grid container direction='column' alignItems='center' spacing={5}>
          <Grid item>Search</Grid>
          <ErrorMessage />
        </Grid>
      </>
    )
  }
  if (loading) {
    return (
      <>
        <BrowseQuote />
        <Grid container direction='column' alignItems='center' spacing={5}>
          <Grid item>Search</Grid>
          <Spinner />
        </Grid>
      </>
    )
  }
  if (data) {
    return (
      <>
        <BrowseQuote />
        <Grid container direction='column' alignItems='center' spacing={5}>
          <Grid item>Search</Grid>
          <Grid item>
            <ImageMasonry data={data} />
          </Grid>
        </Grid>
      </>
    )
  }
}

export default BrowseListings
