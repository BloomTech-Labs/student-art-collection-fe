import React from 'react'
import { Container } from '@material-ui/core'
import { AuthProvider } from './components/auth/Auth'
// import { Register } from './components'
// import { Login } from './components'
// import { Images } from './components/images/images'
import { BrowseListings } from './views'

function App() {
  return (
    <Container>
      <AuthProvider></AuthProvider>
      <BrowseListings />
    </Container>
  )
}

export default App
