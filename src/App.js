import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { AuthProvider } from './components/auth/Auth'
import PrivateRoute from './components/auth/PrivateRoute'
import Dashboard from './components/Dashboard'
import { Register, Login, Navigation, EditSubmission } from './components'
import { BrowseListings, MainPage, SinglePage, AdminSingleView } from './views'
import Submission from './components/forms/Submission'

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
            <Route path='/submission' component={Submission} />
            {/* Example PrivateRoute usage */}
            {/* <PrivateRoute path='<PATH_FOR_ROUTE>' component={'<COMPONENT_FOR_ROUTE>'} /> */}
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact path='/admin/artwork/:id'
              component={AdminSingleView}
            />
            <PrivateRoute 
              exact path='/admin/artwork/:id/edit'
              component={EditSubmission}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </Container>
  )
}

export default App
