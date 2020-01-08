import React from 'react'
import { AuthProvider } from './components/auth/Auth'
// import { Register } from './components'
// import { Login } from './components'
// import { Images } from './components/images/images'
import { BrowseListings } from './views'
import Contact from './components/forms/Contact.js';

function App() {
  return (
    <div>
      <AuthProvider></AuthProvider>
      <BrowseListings />
      <Contact />
    </div>
  )
}

export default App
