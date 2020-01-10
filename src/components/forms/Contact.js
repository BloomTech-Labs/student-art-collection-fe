import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

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

  const [sendMail, { data, loading, error }] = useMutation(SEND_MAIL)

  const onSubmit = e => {
    e.preventDefault()
    sendMail({ variables: { sendto, name, fromUser, subject, message } })
    if (data) {
      console.log('data', data)
    } else if (loading) {
      console.log('Loading')
    } else if (error) {
      console.log('error')
    }
  }

  return (
    <div>
      <h2 style={styles.heading}>Contact The Seller</h2>
      <form onSubmit={onSubmit}>
        <TextField
          variant='outlined'
          label='Name'
          style={styles.textfield}
          size='small'
          fullWidth={false}
          type='text'
          value={name}
          name='name'
          required={true}
          onChange={e => setName(e.target.value)}
        ></TextField>
        <TextField
          variant='outlined'
          label='Email'
          style={styles.textfield}
          size='small'
          fullWidth={false}
          type='email'
          value={fromUser}
          name='email'
          required={true}
          onChange={e => setFromUser(e.target.value)}
        ></TextField>
        <TextField
          variant='outlined'
          label='Subject'
          style={styles.textfield}
          size='small'
          fullWidth={false}
          type='text'
          value={subject}
          name='subject line'
          required={true}
          onChange={e => setSubject(e.target.value)}
        ></TextField>
        <TextField
          variant='outlined'
          label='Message'
          style={styles.textfield}
          size='small'
          fullWidth={true}
          type='text'
          value={message}
          name='message'
          required={true}
          onChange={e => setMessage(e.target.value)}
        ></TextField>
        <Box display='flex' justifyContent='center'>
          <Button
            variant='contained'
            style={styles.button}
            color='primary'
            type='submit'
          >
            Send Email!
          </Button>
        </Box>
      </form>
    </div>
  );
};

const styles = {
  heading: {
    fontFamily: 'Barlow',
    margin: '80px 15px 15px 45px',
    textAlign: 'center',
  },
  textfield: {
    margin: 15,
  },
  button: {
    margin: 15,
  },
};

export default Contact;
