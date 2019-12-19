import React from 'react';
import { AuthProvider } from './components/auth/Auth';
import { Register } from './components'
import { Login } from './components'


function App() {
  return (
    <div>
      <AuthProvider>
        <Register />
        <Login />
      </AuthProvider>
    </div>
  );
}



export default App;
