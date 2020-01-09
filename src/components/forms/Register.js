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
     <Box display='flex' justifyContent='center'>
      <form onSubmit={onSubmit}>
        <TextField
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          type='text'
          name='password'
          value={password}
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <TextField
          type='text'
          name='school name'
          value={schoolName}
          placeholder='school name'
          onChange={e => setSchoolName(e.target.value)}
          required
        />
        <TextField
          type='text'
          name='address'
          value={address}
          placeholder='address'
          onChange={e => setAddress(e.target.value)}
          required
        />
        <TextField
          type='text'
          name='city'
          value={city}
          placeholder='city'
          onChange={e => setCity(e.target.value)}
          required
        />
        <TextField
          type='text'
          name='zipcode'
          value={zipcode}
          placeholder='zipcode'
          onChange={e => setZipcode(e.target.value)}
          required
        />
        </form>
        </Box>
        <button type='submit'>Submit</button>
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
};

export default Register;
