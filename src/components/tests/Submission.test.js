import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, fireEvent, wait } from '@testing-library/react';
import Submission, { SUBMISSION } from '../forms/Submission';
import { MemoryRouter } from 'react-router-dom';

describe('<Submission />', () => {
it('should render without crashing', () => {
    render(
        <MockedProvider mocks={[]}>
            <Submission />
        </MockedProvider>
    );
});

const mockSubmissionVariables = {
    category: 'test category',
    price: '20',
    artist_name: 'test name',
    sold: false,
    description: 'test description',
};

const mockSubmissionResults = {
    data: {
        listing: {
            id: 100,
            category: 'test category',
            price: '20',
            artist_name: 'test name',
            sold: false,
            description: 'test description',
        },
    },
};

it('should successfully submit listing', async () => {

const result = mockSubmissionResults;
const request = {
    query: SUBMISSION,
    variables: mockSubmissionVariables,
};
const push = jest.fn();

const { getByText, getByPlaceholderText } = render(
    <MemoryRouter>
        <MockedProvider mocks={[{ request, result }]} addTypename={false}>
            <Submission />
        </MockedProvider>
    </MemoryRouter>
);

const categoryElement = getByPlaceholderText('category');
const priceInput = getByPlaceholderText('price');
const artistNameInput = getByPlaceholderText('artist name');
const descriptionInput = getByPlaceholderText('description');
const submitButton = getByText('Create Art Listing');

fireEvent.change(categoryElement, {
    target: { name: 'category', value: mockSubmissionVariables.category },
});
expect(categoryElement.value).toBe(mockSubmissionVariables.category);

fireEvent.change(priceInput, {
    target: { name: 'price', value: mockSubmissionVariables.price },
});
expect(priceInput.value).toBe(mockSubmissionVariables.price);

fireEvent.change(artistNameInput, {
    target: { name: 'artistName', value: mockSubmissionVariables.artist_name },
});
expect(artistNameInput.value).toBe(mockSubmissionVariables.artist_name);

fireEvent.change(descriptionInput, {
    target: { name: 'description', value: mockSubmissionVariables.description },
});
expect(descriptionInput.value).toBe(mockSubmissionVariables.description);

submitButton.click();
await wait();
expect(push).toHaveBeenCalled();
});
});