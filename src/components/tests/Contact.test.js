import React from 'react';
import {gql} from 'apollo-boost';
import {MockedProvider} from '@apollo/react-testing';
import {render, fireEvent} from '@testing-library/react';
import Contact from '../forms/Contact';
import {MemoryRouter} from 'react-router-dom';

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
        }`

describe('<Contact />', () => {

    const infoProps = {
        email: 'test@example.com'
    }
    
    const mockEmailVariables = {
        sendto: infoProps.email,
        name: 'Person',
        fromUser: 'test2@test.com',
        subject: 'Test',
        message: 'Test Message'
    }

    const mockEmailResults = {
        data: {
            sendMail: {
                sendto: infoProps.email,
                name: 'Person',
                fromUser: 'test2@test.com',
                subject: 'Test',
                message: 'Test Message',
            }
        }
    }


    it ('should render without crashing', () => {
        render(
            <MockedProvider mocks={[]}>
                <Contact info={infoProps}/>
            </MockedProvider>
        )
    })

    it('should successfully email a user', async () => {
        const result = mockEmailResults;
        const request = {
            query: SEND_MAIL,
            variables: mockEmailVariables,
        };

        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <MockedProvider addTypename={false} mocks={[{request, result}]}>
                    <Contact info={infoProps}/>
                </MockedProvider>
            </MemoryRouter>
        );

        const nameElement = getByPlaceholderText('Name')
        const emailElement = getByPlaceholderText('Email')
        const subjectElement = getByPlaceholderText('Subject')
        const messageElement = getByPlaceholderText('Message')
        const submitButton = getByText('Send Email!')

        fireEvent.change(nameElement, {
            target: {name: 'Name', value: mockEmailVariables.name}
        });
        expect(nameElement.value).toBe(mockEmailVariables.name)

        fireEvent.change(emailElement, {
            target: {name: 'Email', value: mockEmailVariables.fromUser}
        });
        expect(emailElement.value).toBe(mockEmailVariables.fromUser)
        
        fireEvent.change(subjectElement, {
            target: {name: 'Subject', value: mockEmailVariables.subject}
        });
        expect(subjectElement.value).toBe(mockEmailVariables.subject)

        fireEvent.change(messageElement, {
            target: {name: 'Message', value: mockEmailVariables.message}
        });
        expect(messageElement.value).toBe(mockEmailVariables.message)

        submitButton.click();
    })
})