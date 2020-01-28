import React from 'react'
import { useLazyQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

//todo remove data checks
import { DataCheck } from './DataCheck'

//todo including 'category' is causing this to fail
//todo an issue with the resolver...???
const SEARCH_ART = gql`
  query searchArt($zipcode: String) {
    filter(filter: { zipcode: { eq: $zipcode } }) {
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
  const [searchArt, { called, loading, data }] = useLazyQuery(SEARCH_ART, {
    variables: { zipcode: zip },
  })

  if (called && loading) {
    return (
      <>
        <h1>Called and Loading!</h1>
        <DataCheck data={{ category: cat }} />
        <DataCheck data={{ zipcode: zip }} />
      </>
    )
  }
  if (!called) {
    return (
      <>
        <h1>Not called!</h1>
        {/* 
        //todo automate this - user shouldn't need to click the button to see results
        */}
        <button onClick={() => searchArt()}>Load results</button>
        <DataCheck data={{ category: cat }} />
        <DataCheck data={{ zipcode: zip }} />
      </>
    )
  }
  return (
    <>
      {/*
      //todo format results page similar to other display pages (eg ImageMasonry)
      //? Even better: A component like ImageMasonry should only be formatting image layout, not everything else it's doing...
      */}
      <DataCheck data={data} />
      <DataCheck data={{ category: cat }} />
      <DataCheck data={{ zipcode: zip }} />
    </>
  )
}

export default SearchResults
