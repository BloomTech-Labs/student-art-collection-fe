import React, { useState } from 'react';
import {useMutation} from 'react-apollo';
import {gql} from 'apollo-boost';

const SEND_MAIL = gql`
    mutation sendMail(
        $sendto: String, 
        $name: String, 
        $fromUser: String, 
        $subject: String, 
        $message: String
        ) {
            sendMail(
                sendto: $sendto,
                name: $name,
                fromUser: $fromUser,
                subject: $subject,
                message: $message 
            ) {
                sendto
                name
                fromUser
                subject
                message
            }
        }
`

const Contact = (props) => {
    const [sendto] = useState(props.info.email)
    const [name, setName] = useState('')
    const [fromUser, setFromUser] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [sendMail, {data, loading, error}] = useMutation(SEND_MAIL)

    const onSubmit = e => {
        e.preventDefault()
        sendMail({variables: {sendto, name, fromUser, subject, message}})
        if (data) {
            console.log('data', data)
        } 
        else if (loading) {
            console.log('Loading')
        }
        else if (error) {
            console.log('error')
        }
    }


    return (
        <div>
            <h2>Contact The Seller</h2>
            <form onSubmit={onSubmit}>
                <input type='text' value={name} name='Your Name' placeholder='Your Name' onChange={e => setName(e.target.value)}></input>
                <input type='text' value={fromUser} name='Your Email' placeholder='Your Email' onChange={e => setFromUser(e.target.value)}></input>
                <input type='text' value={subject} name='Your Subject Line' placeholder='Your Subject Line' onChange={e => setSubject(e.target.value)}></input>
                <input type='text' value={message} name='Your Message' placeholder='Your Message' onChange={e => setMessage(e.target.value)}></input>
                <button type='submit'>Send Email!</button>
            </form>
        </div>
    )
}

export default Contact;