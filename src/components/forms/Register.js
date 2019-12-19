import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import firebaseApp from '../auth/firebaseApp';

const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $password: String!
    $address: String!
    $city: String!
    $state: String!
    $zipcode: String!
  ) {
    registerUser(
      email: $email
      password: $password
      address: $address
      city: $city
      state: $state
      zipcode: $zipcode
    ) {
      email
      password
      address
      city
      state
      zipcode
    }
  }
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

  const onSubmit = async e => {
    e.preventDefault();
    //This newUser object needs to be added to the request to the backend to connect
    //the firebase user to the app user account
    const newUser = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    registerUser({
      variables: { email, password, address, city, state, zipcode }
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
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type='text'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          type='text'
          name='address'
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />
        <input
          type='text'
          name='city'
          value={city}
          onChange={e => setCity(e.target.value)}
          required
        />
        <input
          type='text'
          name='state'
          value={state}
          onChange={e => setState(e.target.value)}
          required
        />
        <input
          type='text'
          name='zipcode'
          value={zipcode}
          onChange={e => setZipcode(e.target.value)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Register;
