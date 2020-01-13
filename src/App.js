import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { AuthProvider } from './components/auth/Auth'
import PrivateRoute from './components/auth/PrivateRoute'
import Dashboard from './components/Dashboard'
import { Register, Login, Navigation } from './components'
import { BrowseListings, MainPage, SinglePage, AdminSingleView } from './views'

function App() {
  return (
    <Container>
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/browse' component={BrowseListings} />
            <Route path='/artwork/:id' component={SinglePage} />
            {/* Example PrivateRoute usage */}
            {/* <PrivateRoute path='<PATH_FOR_ROUTE>' component={'<COMPONENT_FOR_ROUTE>'} /> */}
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute
              path='/admin/artwork/:id'
              component={AdminSingleView}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </Container>
  )
}

export default App
