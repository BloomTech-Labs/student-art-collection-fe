import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { AuthProvider } from './components/auth/Auth'
import { Register } from './components'
import { Login } from './components'
// import { Images } from './components/images/images'
import { BrowseListings } from './views'
import Contact from './components/forms/Contact.js';

function App() {
  return (
    <Container>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/browse' component={BrowseListings} />
          </Switch>
        </Router>
      </AuthProvider>
    </Container>
  )
}

export default App
