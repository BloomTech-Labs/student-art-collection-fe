import React, { useState } from 'react'
import { useLazyQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import { TextField } from '@material-ui/core'
import CategorySelection from './CategorySelection'
import { SubmitButton } from '../styles/muiButtons'

const SEARCH_ART = gql`
  query($zipcode: String) {
    filter(filter: { zipcode: { eq: $zipcode } }) {
      id
    }
  }
`

export const SearchForm = () => {
  const [cat, setCat] = useState('')
  const [zip, setZip] = useState('')
  const [search, setSearch] = useState({ cat, zip })
  // const [searchArt, { error, loading, data }] = useLazyQuery(SEARCH_ART)

  const handleSubmit = e => {
    e.preventDefault()
    setSearch({
      ...search,
      cat,
      zip,
    })
  }

  // console.log(`category >>>`, cat)
  // console.log(`zip code >>>`, zip)
  console.log(`search by >>>`, search)

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <CategorySelection cat={cat} setCat={setCat} />
      <TextField value={zip} onChange={e => setZip(e.target.value)} />
      <SubmitButton type='submit'>Submit</SubmitButton>
    </form>
  )
}
