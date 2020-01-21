import React from 'react'
import { Grid } from '@material-ui/core'
import { EditButton, DeleteButton } from '../styles/muiButtons'

const EditConsole = ({ handleEdit, handleDelete }) => {
  return (
    <Grid container spacing={5} justify='space-evenly'>
      <Grid item>
        <EditButton onClick={() => handleEdit()} variant='outlined'>
          Edit
        </EditButton>
      </Grid>
      <Grid item>
        <DeleteButton onClick={handleDelete} variant='outlined'>
          Delete
        </DeleteButton>
      </Grid>
    </Grid>
  )
}

export default EditConsole
