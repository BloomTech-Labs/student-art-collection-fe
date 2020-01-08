import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, fireEvent, wait } from '@testing-library/react';
import Login, { LOGIN_USER } from '../forms/Login';
import { MemoryRouter } from 'react-router-dom';

describe('<Login />', () => {
    it('should render without crashing', () => {
        render(
            <MockedProvider mocks={[]}>
                <Login />
            </MockedProvider>
        );
    });

    const mockLoginVariables = {
        email: 'me@gmail.com',
        password: 'jdp123',
    };

    const mockLoginResults = {
        data: {
            login: {
                token: 'mockToken',
            },
        },
    };

    it('should successfully login user', async () => {

    const result = mockLoginResults;
    const request = {
        query: LOGIN_USER,
        variables: mockLoginVariables,
    };
    const push = jest.fn();

    const { getByPlaceholderText, getByValue } = render(
        <MemoryRouter>
            <MockedProvider mocks={[{ request, result }]}>
                <Login />
            </MockedProvider>
        </MemoryRouter>,
    );

    const inputElement = getByPlaceholderText('email');
    const passwordInput = getByPlaceholderText('password');
    const submitButton = getByValue('Login');

    fireEvent.change(inputElement, {
        target: { name: 'email', value: mockLoginVariables.email },
    });
    expect(inputElement.value).toBe(mockLoginVariables.email);

    fireEvent.change(passwordInput, {
        target: { name: 'password', value: mockLoginVariables.password },
    });
    expect(passwordInput.value).toBe(mockLoginVariables.password);

    submitButton.click();
    await wait();
    expect(push).toHaveBeenCalled();
    });

});