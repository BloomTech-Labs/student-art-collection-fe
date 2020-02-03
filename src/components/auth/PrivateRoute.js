import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './Auth'

const PrivateRoute = ({ component: Component, ...rest}) => {

    return (
            <AuthConsumer>
                {
                    context => {
                        if (context.loading) {
                            return <h2>Loading...</h2>
                        }
                        if (context.authenticated) {
                            return (
                                <Route {...rest} render={props => {
                                    return <Component {...props} schoolId={context.currentUser.uid}/>
                                }} />
                            )
                        } else {
                            return <Redirect to='/login' />
                        }
                    }
                }
            </AuthConsumer>

    );
};

export default PrivateRoute;