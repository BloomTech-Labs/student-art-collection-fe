import React, { useState, useContext } from 'react'
import { useLazyQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import ReloadContext from './ReloadContext'
import { SubmitButton } from '../styles/muiButtons'

export const SEARCH_ART_COMPLETE = gql`
  query($zipcode: String, $category: String) {
    filter(filter: { zipcode: { eq: $zipcode }, category: { eq: $category } }) {
      id
      title
      school {
        school_name
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
      school {
        zipcode
      }
    }
  }
`

export const SEARCH_ART_ZIPCODE = gql`
  query($zipcode: String) {
    filter(filter: { zipcode: { eq: $zipcode } }) {
      id
      title
      school {
        school_name
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
      school {
        zipcode
      }
    }
  }
`

export const SEARCH_ART_CATEGORY = gql`
  query($category: String) {
    filter(filter: { category: { eq: $category } }) {
      id
      title
      school {
        school_name
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
      school {
        zipcode
      }
    }
  }
`

const SearchButton = ({ cat, zip, setDat }) => {
  const [
    searchArt,
    { error: fullError, loading: fullLoading, data: fullData },
  ] = useLazyQuery(SEARCH_ART_COMPLETE)
  const [
    searchArtZip,
    { error: zipError, loading: zipLoading, data: zipData },
  ] = useLazyQuery(SEARCH_ART_ZIPCODE)
  const [
    searchArtCat,
    { error: catError, loading: catLoading, data: catData },
  ] = useLazyQuery(SEARCH_ART_CATEGORY)

  const handleSearch = e => {
    e.preventDefault()
    console.log('clicked')
    if (zip && cat) {
      searchArt({
        variables: {
          category: cat,
          zipcode: zip,
        },
      })
      if (fullError) {
        console.log('complete error', fullError)
      }
      if (fullLoading) {
        console.log('complete loading', fullLoading)
      }
      if (fullData) {
        console.log('complete data', fullData)
      }
    } else if (cat) {
      searchArtCat({
        variables: {
          category: cat,
        },
      })
      if (catError) {
        console.log('cat error', catError)
      }
      if (catLoading) {
        console.log('cat loading', catLoading)
      }
      if (catData) {
        console.log('cat data', catData)
      }
    } else if (zip) {
      searchArtZip({
        variables: {
          zipcode: zip,
        },
      })
      if (zipError) {
        console.log('zip error', zipError)
      }
      if (zipLoading) {
        console.log('zip loading', zipLoading)
      }
      if (zipData) {
        console.log('zip data', zipData)
      }
    }
  }
  return (
    /* 
        Due to limitations of MaterialUI, we had to use onMouseDown for this handleSearch function.  
        Were we to use onClick, we would run into an issue where the button had to be clicked twice
        in order for the function to properly execute. 

        Please read more about this issue here:
        https://github.com/mui-org/material-ui/issues/4532
        */
    <SubmitButton onMouseDown={e => handleSearch(e)}>Search</SubmitButton>
  )
}

export default SearchButton
