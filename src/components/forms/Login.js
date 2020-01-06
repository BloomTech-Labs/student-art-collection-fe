import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from 'react-apollo';
import firebaseApp from '../auth/firebaseApp'

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!){
        loginUser(email: $email, password: $password){
            email
            password
        }
    }
`


const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ loginUser, {data, loading, error} ] = useMutation(LOGIN_USER);

    const onSubmit = async e => {
        e.preventDefault();
        
        await firebaseApp.auth().signInWithEmailAndPassword(email, password);

        loginUser({ variables: {email, password} })
    };

    return (
        <>
              <form onSubmit={onSubmit}>
              <input
                type='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required 
                />
              <input 
                type='password'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
              <button type='submit'>Login</button>  
          </form>
        </>
    );
};

export default Login;