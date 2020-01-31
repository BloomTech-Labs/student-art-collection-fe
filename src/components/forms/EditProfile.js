import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo'
import { Grid } from '@material-ui/core'
import NotificationModal from '../NotificationModal'
import { formStyles, InputField } from '../../styles/muiForms'
import { SubmitButton } from '../../styles/muiButtons'

const UPDATE_SCHOOL = gql`
  mutation updateSchool(
    $id: ID!
    $school_name: String!
    $email: String!
    $address: String!
    $city: String!
    $zipcode: String!
  ) {
    updateSchool(
      id: $id
      school_name: $school_name
      email: $email
      address: $address
      city: $city
      zipcode: $zipcode
    ) {
      school_name
      email
      address
      city
      zipcode
    }
  }
`

const EditProfile = ({ school, id }) => {
  const classes = formStyles()
  const [updateSchool] = useMutation(UPDATE_SCHOOL)
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [update, setUpdate] = useState({
    school_name: school.school_name,
    email: school.email,
    address: school.address,
    city: school.city,
    zipcode: school.zipcode,
  })

  const handleChange = e =>
    setUpdate({ ...update, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    const variables = { ...update, id: id }
    updateSchool({
      variables,
    })
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    history.push('/admin/dashboard')
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Grid
          container
          direction='column'
          alignItems='center'
          spacing={4}
          className={classes.root}
        >
          <Grid item>
            <InputField
              name='school_name'
              label='School Name'
              variant='outlined'
              size='small'
              type='text'
              value={update.school_name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item>
            <InputField
              name='email'
              label='Email'
              variant='outlined'
              size='small'
              type='text'
              value={update.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item>
            <InputField
              name='address'
              label='Address'
              variant='outlined'
              size='small'
              type='text'
              value={update.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item>
            <InputField
              name='city'
              label='City'
              variant='outlined'
              size='small'
              type='text'
              value={update.city}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item>
            <InputField
              name='zipcode'
              label='Zip Code'
              variant='outlined'
              size='small'
              type='text'
              value={update.zipcode}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item>
            <SubmitButton variant='contained' size='medium' type='submit'>
              Submit
            </SubmitButton>
          </Grid>
        </Grid>
      </form>
      <NotificationModal
        open={open}
        handleClose={handleClose}
        message='Information updated'
      />
    </>
  )
}

export default EditProfile
