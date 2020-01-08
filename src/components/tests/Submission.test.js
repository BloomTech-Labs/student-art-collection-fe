import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, fireEvent, wait } from '@testing-library/react';
import Submission, { SUBMISSION } from '../forms/Submission';

describe('routes using memory router', () => {
it('should render without crashing', () => {
    render(
        <MockedProvider mocks={[]}>
            <Submission />
        </MockedProvider>
    );
});

it("should render products", async () => {
    const mocks = {
        request: { query: 'SUBMISSION' },
        result: {
            data: {
                listing: [
                {
                    id: 100,
                    category: "Test",
                    price: "20",
                    artistName: 'test name',
                    description: 'test description'
                }
                ]
            }
        }
    };

    const component = render(
        <MockedProvider mocks={[mocks]} addTypename={false}>
            <Submission />
        </MockedProvider>
    );

    await wait(5);

    const h3 = component.root.findByType("h3");
    expect(h3.children).toContain("Test");
    });
});