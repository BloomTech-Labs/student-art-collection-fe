import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import CategorySelection from './CategorySelection'
import { SubmitButton } from '../styles/muiButtons'

const SearchForm = () => {
  const [cat, setCat] = useState('')
  const [zip, setZip] = useState('')
  const history = useHistory()

  const handleSubmit = e => {
    //? set state...
    setCat(cat)
    setZip(zip)

    //? create a newSearch object...
    const newSearch = { cat, zip }

    //? send that object to the results page to get queried...
    history.push('/results', { newSearch })
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <CategorySelection cat={cat} setCat={setCat} />
      <TextField value={zip} onChange={e => setZip(e.target.value)} />
      <SubmitButton type='submit'>Submit</SubmitButton>
    </form>
  )
}

export default SearchForm
