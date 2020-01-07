import React from 'react';
import { AuthProvider } from './components/auth/Auth';
import { Register } from './components'
import { Login } from './components'
import { Images } from './components/images/images'


function App() {
  return (
    <div>
      {/* <p>hi</p> */}
      <AuthProvider>
        {/* <Register /> */}
        <Login />
      </AuthProvider>
      {/* <Images /> */}
    </div>
  );
}



export default App;
