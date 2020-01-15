import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import ImageMasonry from '../ImageMasonry';

describe('<Dashboard />', () => {

    const idProps = {
        params: {
            id: 1
        }
    }
    it('should render without crashing', () => {
        render(
            <MockedProvider mocks={[]}>
                <ImageMasonry match={idProps} />
            </MockedProvider>
        );
    });
});