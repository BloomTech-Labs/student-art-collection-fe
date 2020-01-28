import React, { useEffect, useContext } from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Grid } from '@material-ui/core'
import {
  ErrorMessage,
  Spinner,
  ReloadContext,
  ImageMasonry,
} from '../components'

const SEARCH_ART = gql`
  query searchArt($zipcode: String, $category: String) {
    filter(filter: { zipcode: { eq: $zipcode }, category: { eq: $category } }) {
      id
      title
      school {
        school_name
        zipcode
      }
      images {
        image_url
      }
      price
      sold
      category {
        id
        category
      }
    }
  }
`

const SearchResults = ({ location }) => {
  const { cat, zip } = location.state.newSearch
  const { reload, setReload, setArtId } = useContext(ReloadContext)
  const { error, loading, data, refetch } = useQuery(SEARCH_ART, {
    variables: { zipcode: zip, category: cat },
  })

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
        <Grid item>
          <ErrorMessage />
        </Grid>
      </Grid>
    )
  }
  if (loading) {
    return (
      <Grid container direction='column' alignItems='center' spacing={5}>
        <Grid item>
          <Spinner />
        </Grid>
      </Grid>
    )
  }
  if (data) {
    console.log(`data >>>`, data)
    return (
      <Grid
        container
        direction='column'
        alignItems='center'
        spacing={5}
        style={{ marginTop: '50px' }}
      >
        <Grid item>
          <ImageMasonry art={data.filter} />
        </Grid>
      </Grid>
    )
  }
}

export default SearchResults
