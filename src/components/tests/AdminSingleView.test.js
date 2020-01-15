import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import AdminSingleView from '../../views/AdminSingleView';

describe('<Dashboard />', () => {

    const idProps = {
        params: {
            id: 1
        }
    }
    it('should render without crashing', () => {
        render(
            <MockedProvider mocks={[]}>
                <AdminSingleView match={idProps}/>
            </MockedProvider>
        );
    });
});