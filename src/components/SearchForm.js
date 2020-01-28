import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Grid, TextField } from '@material-ui/core'
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
      <Card style={{ padding: '20px' }}>
        <Grid container alignItems='center' justify='center' spacing={5}>
          <Grid item>
            <CategorySelection cat={cat} setCat={setCat} />
          </Grid>
          <Grid item>
            <TextField
              variant='outlined'
              size='small'
              label='zip code'
              value={zip}
              onChange={e => setZip(e.target.value)}
            />
          </Grid>
          <Grid item>
            <SubmitButton type='submit'>Search</SubmitButton>
          </Grid>
        </Grid>
      </Card>
    </form>
  )
}

export default SearchForm
