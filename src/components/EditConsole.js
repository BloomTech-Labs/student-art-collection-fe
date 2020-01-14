import React from 'react'
import { Button, Grid } from '@material-ui/core'

const EditConsole = ({ handleEdit, handleDelete }) => {
  return (
    <Grid container spacing={5} justify='space-evenly'>
      <Grid item>
        <Button onClick={handleEdit} variant='outlined'>
          Edit
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={handleDelete} variant='outlined'>
          Delete
        </Button>
      </Grid>
    </Grid>
  )
}

export default EditConsole
