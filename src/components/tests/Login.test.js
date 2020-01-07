import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, fireEvent, wait } from '@testing-library/react';
import Login, { LOGIN_USER } from '../forms/Login';

it('should render without crashing', () => {
    render(
        <MockedProvider mocks={[]}>
            <Login />
        </MockedProvider>
    );
});