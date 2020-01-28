import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

//todo remove data checks
import { DataCheck } from '../components/DataCheck'

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
  const { error, loading, data } = useQuery(SEARCH_ART, {
    variables: { zipcode: zip, category: cat },
  })
  if (error) {
    return (
      <>
        <DataCheck data={error} />
        <h1>Error</h1>
      </>
    )
  }
  if (loading) {
    return <h1>Loading</h1>
  }
  if (data) {
    return (
      <>
        <DataCheck data={data} />
      </>
    )
  }
}

export default SearchResults
