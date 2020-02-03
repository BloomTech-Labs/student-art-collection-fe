import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, fireEvent, wait, getByPlaceholderText } from '@testing-library/react';
import Login, { LOGIN_USER } from '../forms/Login';
import { MemoryRouter } from 'react-router-dom';

describe('<Login />', () => {

    const emailMock = 'macktest2@example.com'
    const passwordMock = 'test123'

    it('should render without crashing', () => {
        render(
            <MockedProvider mocks={[]}>
                <Login />
            </MockedProvider>
        );
    });

    it('should send something to firebase', () => {
        const {getByPlaceholderText, getByText} = render (
            <MemoryRouter
            initialEntries={[
                '/login',
                '/dashboard'
            ]}
            >
                <MockedProvider mocks={[]}>
                    <Login />
                </MockedProvider>
            </MemoryRouter>
        );

        const emailElement = getByPlaceholderText('Email')
        const passwordElement = getByPlaceholderText('Password')

        fireEvent.change(emailElement, {
            target: {name: 'email', value: emailMock}
        })
        
        fireEvent.change(passwordElement, {
            target: {name: 'password', value: passwordMock}
        })
    });

});