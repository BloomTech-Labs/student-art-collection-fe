import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { AuthProvider } from './components/auth/Auth'
import PrivateRoute from './components/auth/PrivateRoute'
import { Register, Login, Navigation } from './components'
import { BrowseListings, MainPage } from './views'

function App() {
  return (
    <Container>
      <AuthProvider>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/browse' component={BrowseListings} />
            {/* Example PrivateRoute usage */}
            {/* <PrivateRoute path='<PATH_FOR_ROUTE>' component={'<COMPONENT_FOR_ROUTE>'} /> */}
          </Switch>
        </Router>
      </AuthProvider>
    </Container>
  )
}

export default App
