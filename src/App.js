import React from 'react';
import { firebaseConfig } from './firebaseConfig';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import { Register } from './components'
import { Login } from './components'

function App() {
  return (
    <div>
      <Register />
      <Login />
    </div>
  );
}

export default App;
