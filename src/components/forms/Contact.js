import React, { useState } from 'react'
import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Grid, TextField, Typography } from '@material-ui/core'
import { formStyles } from '../../styles/muiForms'
import { SubmitButton } from '../../styles/muiButtons'

const SEND_MAIL = gql`
  mutation sendMail(
    $sendto: String
    $name: String
    $fromUser: String
    $subject: String
    $message: String
  ) {
    sendMail(
      sendto: $sendto
      name: $name
      fromUser: $fromUser
      subject: $subject
      message: $message
    ) {
      sendto
      name
      fromUser
      subject
      message
    }
  }
`

const Contact = props => {
  const [sendto] = useState(props.info.email)
  const [name, setName] = useState('')
  const [fromUser, setFromUser] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const classes = formStyles()

  const [sendMail, { data, loading, error }] = useMutation(SEND_MAIL)

  const onSubmit = e => {
    e.preventDefault()
    sendMail({ variables: { sendto, name, fromUser, subject, message } }).then(
      () => {
        setName('')
        setFromUser('')
        setSubject('')
        setMessage('')
      }
    )
    if (data) {
    } else if (loading) {
    } else if (error) {
    }
  }

  return (
    <Grid container direction='column' alignItems='center' spacing={4}>
      <Grid item>
        <Typography variant='h2' component='h2'>
          Contact the Seller
        </Typography>
      </Grid>
      <Grid item>
        <form onSubmit={onSubmit}>
          <Grid container direction='column' alignItems='center' spacing={3}>
            <Grid item>
              <TextField
                placeholder='Name'
                label='Name'
                name='name'
                variant='outlined'
                size='small'
                type='text'
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                placeholder='Email'
                label='Email'
                name='email'
                variant='outlined'
                size='small'
                type='email'
                required
                value={fromUser}
                onChange={e => setFromUser(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                placeholder='Subject'
                label='Subject'
                name='subject line'
                variant='outlined'
                size='small'
                type='text'
                required
                value={subject}
                onChange={e => setSubject(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                placeholder='Message'
                label='Message'
                name='message'
                variant='outlined'
                size='small'
                type='text'
                multiline
                rows={8}
                required
                className={classes.message}
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item>
              <SubmitButton>Submit</SubmitButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>

    //     <Box display='flex' justifyContent='center'>
    //       <Button
    //         variant='contained'
    //         style={styles.button}
    //         color='primary'
    //         type='submit'
    //       >
    //         Send Email
    //       </Button>
    //     </Box>
    //   </form>
    // </div>
  )
}

export default Contact
