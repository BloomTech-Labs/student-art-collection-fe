import React, { useEffect, useContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { Grid } from '@material-ui/core'
import {
  ErrorMessage,
  Spinner,
  ReloadContext,
  ImageMasonry,
  SearchForm,
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
      <>
        <BrowseQuote />
        <Grid container justify='center'>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <ErrorMessage />
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </>
    )
  }
  if (loading) {
    return (
      <>
        <BrowseQuote />
        <Grid container justify='center'>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <Spinner />
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </>
    )
  }
  if (data) {
    return (
      <>
        <BrowseQuote />
        <Grid container direction='column' alignItems='center' spacing={5}>
          <Grid item>
            <SearchForm />
          </Grid>
          <Grid item>
            <ImageMasonry art={data.allArts} />
          </Grid>
        </Grid>
      </>
    )
  }
}

export default BrowseListings
