import React, { Component } from 'react';
import currentUser from './auth/Auth';
import Navigation from './Navigation';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {},
            welcome: true

        };
    }

    componentDidMount(){
        const userInfo = currentUser;
        this.setState({
            user: userInfo
        });
        if(userInfo){
            this.props.setAuthState(userInfo);
        }
        setTimeout(
            function(){
                this.setState({
                    welcome: false
                });
            }.bind(this),
            5000
        );
    }

    render(){
        return(
            <>
            <div>
                <Navigation />
            </div>

            <div>
                Welcome, {this.state.user.artistName}
            </div>

            <div>
                
            </div>
            </>

        )
    }
}

export default Dashboard;