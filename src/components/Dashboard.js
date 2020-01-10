import React, { Component } from 'react';
import currentUser from './auth/Auth';
import Navigation from './Navigation';
import {gql} from 'apollo-boost';
import {useQuery, Query} from 'react-apollo';
import Divider from '@material-ui/core/Divider'

const GET_USER_LISTINGS = gql`
query {
    artBySchool {
        art {
            title
            artist_name
            images
        }
    }
}
`
const GET_USER = gql`
query {
    schoolBySchoolID {
        school_id
        school_name
    }
}
`
class Dashboard extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         user: {},
    //         welcome: true

    //     };
    // }

    // componentDidMount(){
    //     const userInfo = currentUser;
    //     this.setState({
    //         user: userInfo
    //     });
    //     if(userInfo){
    //         this.props.setAuthState(userInfo);
    //     }
    //     setTimeout(
    //         function(){
    //             this.setState({
    //                 welcome: false
    //             });
    //         }.bind(this),
    //         5000
    //     );
    // }

    render(){
        return(
            <>
            <div>
                <Navigation />
            </div>

            <Query query = {GET_USER}>
                {({ loading, error, data }) => {
                    if (loading) return <div> Fetching </div>
                    if (error) return <div> Error </div>

                    const welcomeUser = data.schoolBySchoolID.school_id

                    return (
                        <div>
                            {welcomeUser.map(welcome => <Divider key={welcome.school_name} welcome={welcome} /> )}
                        </div>
                    )
                }}
            </Query>

            <Query query = {GET_USER_LISTINGS}>
                
            </Query>

            </>

        )
    }
}

export default Dashboard;