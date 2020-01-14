import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import { ErrorMessage, Spinner } from './index'

const CATEGORIES = gql`
  query allCategories {
    allCategories {
      id
      category
    }
  }
`

const CategorySelection = ({ cat, setCat }) => {
  const { error, loading, data } = useQuery(CATEGORIES)

  if (error) {
    return <ErrorMessage />
  }
  if (loading) {
    return <Spinner />
  }
  if (data) {
    return (
      <FormControl variant='outlined' size='small'>
        <Select
          displayEmpty
          value={cat}
          onChange={e => setCat(e.target.value)}
          required={true}
        >
          <MenuItem value=''>Art Category</MenuItem>
          {data.allCategories.map(item => (
            <MenuItem value={item.id} key={item.id}>
              {item.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }
}

export default CategorySelection
