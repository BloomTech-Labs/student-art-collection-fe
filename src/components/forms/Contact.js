import React, { Component } from 'react';
import axios from 'axios';
import {useQuery} from 'react-apollo';

class Contact extends Component {
    constructor (props) {
        super (props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.changeName = (event) => {
            this.setState({name: event.target.value})
        }

        this.changeEmail = (event) => {
            this.setState({email: event.target.value})
        }

        this.changeMessage = (event) => {
            this.setState({message: event.target.value})
        }

        this.handleSubmit = (event) => {
            event.preventDefault()
            console.log(this.state)
        }
    }
    


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.changeName} placeholder="name" /> 
                    <input type="text" value={this.state.email} onChange={this.changeEmail} placeholder="email" />
                    <input type="text" value={this.state.message} onChange={this.changeMessage} placeholder="message" />
                    <button type="submit">Submit!</button>
                </form>
            </div>
        )
    }
}

export default Contact;