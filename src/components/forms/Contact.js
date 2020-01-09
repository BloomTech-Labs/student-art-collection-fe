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

const Contact = () => {
    const [sendto] = useState('mack.webb37@gmail.com')
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
            alert('Your message has been sent!')
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
                <input type="text" value={name} placeholder="Your Name" onChange={e => setName(e.target.value)}></input>
                <input type="text" value={fromUser} placeholder="Your email" onChange={e => setFromUser(e.target.value)}></input>
                <input type="text" value={subject} placeholder="Your Subject Line" onChange={e => setSubject(e.target.value)}></input>
                <input type="text" value={message} placeholder="Your Message" onChange={e => setMessage(e.target.value)}></input>
                <button type='submit'>Send Email!</button>
            </form>
        </div>
    )
}

export default Contact;