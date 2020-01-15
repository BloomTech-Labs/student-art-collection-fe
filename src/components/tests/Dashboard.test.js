import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('<Dashboard />', () => {
    it('should render without crashing', () => {
        render(
            <MockedProvider mocks={[]}>
                <Dashboard />
            </MockedProvider>
        );
    });
});