import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import firebaseApp from '../auth/firebaseApp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

const REGISTER_USER = gql`
mutation 
  addSchool(
    $school_id: ID!
    $school_name: String!
    $email: String!
    $address: String!
    $city: String!
    $zipcode: String!
  ) {
    addSchool (
    school_id: $school_id
    school_name: $school_name
    email: $email
    address: $address
    city: $city
    zipcode: $zipcode
    ) {
      school_id
      school_name
      email
      address
      city
      zipcode
    }
  }
`
export {REGISTER_USER};
// `
//   mutation addSchool(
//     $school_id: ID!
//     $email: String!
//     $school_name: String!
//     $address: String!
//     $city: String!
//     $zipcode: String!
//   ) {
//     addSchool(
//       school_id: ID!
//       email: String!
//       school_name: String!
//       address: String!
//       city: String!
//       zipcode: String!
//     ) {
//       email
//       password
//       school_name
//       address
//       city
//       zipcode
//     }
//   }
// `;

const Register = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  const [addSchool, { data, loading, error }] = useMutation(REGISTER_USER);

  const onSubmit = async e => {
    e.preventDefault();
    //This newUser object needs to be added to the request to the backend to connect
    //the firebase user to the app user account
    const newUser = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    // setSchoolId(newUser.uid)
    console.log(newUser)
    addSchool({
      variables: { 
        school_id: newUser.user.uid, 
        email, 
        school_name: schoolName, 
        address, 
        city, 
        zipcode }
    });
  };

  if (error) {
    //? if server returns an error...
    return <div>Error....</div>;
  }
  if (loading) {
    //? while user is being registered
    return <div>Loading...</div>;
  }
  if (data) {
    //todo redirect upon successful registration
  }
  return (
    <>
    <h2 style={styles.heading}>Register for Student ArtCo!</h2>
     <Box display='flex' style={styles.textfieldbox}>
      <form onSubmit={onSubmit}>
        <TextField
          variant='outlined'
          label='Email'
          style={styles.textfield}
          size='small'
          fullWidth={false}
          type='text'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          variant='outlined'
          label='Password'
          style={styles.textfield}
          size='small'
          fullWidth={false}
          type='text'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          variant='outlined'
          label='School Name'
          style={styles.textfield}
          size='small'
          fullWidth={false}
          type='text'
          name='school name'
          value={schoolName}
          onChange={e => setSchoolName(e.target.value)}
        />
        <TextField
          variant='outlined'
          label='Address'
          style={styles.textfield}
          size='small'
          fullWidth={false}
          type='text'
          name='address'
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <TextField
          variant='outlined'
          label='City'
          style={styles.textfield}
          size='small'
          fullWidth={false}
          type='text'
          name='city'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <TextField
          variant='outlined'
          label='ZIP Code'
          style={styles.textfield}
          size='small'
          fullWidth={false}
          type='text'
          name='zipcode'
          value={zipcode}
          onChange={e => setZipcode(e.target.value)}
        />
        </form>
        </Box>
        <Box display='flex' justifyContent='center'>
        <Button
          variant='contained'
          style={styles.button}
          color='primary'
          type='submit'
        >
          Register
        </Button>
        </Box>
    </>
  );
};

const LoginP = styled.p`
    text-align: center;
    font-family: 'Nunito';
`

const styles = {
  heading: {
    fontFamily: 'Barlow',
    margin: '80px 15px 15px 45px',
    textAlign: 'center'
  },
  textfield: {
    margin: 15,
  },
  button: {
    margin: 15,
  },
  textfieldbox: {
    marginLeft: 100,
  },
};

export default Register;
