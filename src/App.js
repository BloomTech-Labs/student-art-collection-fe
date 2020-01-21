import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { AuthProvider } from './components/auth/Auth'
import { ReloadProvider } from './components/ReloadContext'
import PrivateRoute from './components/auth/PrivateRoute'
import Dashboard from './components/Dashboard'
import { Register, Login, Navigation, EditSubmission } from './components'
import Submission from './components/forms/Submission'
import { BrowseListings, MainPage, SinglePage, AdminSingleView } from './views'
import ScrollTop from './components/ScrollTop'
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Toolbar } from '@material-ui/core';

function App(props) {
  const [reload, setReload] = useState(false)
  return (
    <Container>
      <AuthProvider>
        <ReloadProvider value={{ reload, setReload }}>
          <Router>
           <Toolbar id="back-to-top-anchor">
            <Navigation />
            </Toolbar>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/browse' component={BrowseListings} />
              <Route path='/artwork/:id' component={SinglePage} />
              {/* <Route
                path='/artwork'
                render={props => <SinglePage {...props} id={1} />}
              /> */}
              {/* Example PrivateRoute usage */}
              {/* <PrivateRoute path='<PATH_FOR_ROUTE>' component={'<COMPONENT_FOR_ROUTE>'} /> */}
              <PrivateRoute path='/admin/dashboard' component={Dashboard} />
              {/*
                 //? adding the id variable in order to avoid using the firebase
                 //? uid for the newArt mutation
              */}
              <PrivateRoute
                path='/admin/artwork/:id/new'
                component={Submission}
              />
              <PrivateRoute
                exact
                path='/admin/artwork/:id'
                component={AdminSingleView}
              />
              <PrivateRoute
                exact
                path='/admin/artwork/:id/edit'
                component={EditSubmission}
              />
            </Switch>
            <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
          </Router>
        </ReloadProvider>
      </AuthProvider>
    </Container>
  )
}

export default App
