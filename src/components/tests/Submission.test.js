import React from 'react';

import { MockedProvider } from '@apollo/react-testing';

import { render, fireEvent, wait } from '@testing-library/react';

import Submission, { SUBMISSION } from '../forms/Submission';

const mocks = [

{

request: {

query: SUBMISSION,

variables: {

category: 'testing',

price: '2.00'

},

},

newData: jest.fn(() => ({

data: {

addListing: {

category: 'testing',

price: '2.00'

},

},

})),

},

]

test('mutation should be called when clicking the button', async () => {

const { findByText } = render(

<MockedProvider mocks={mocks} addTypename={false}>

<Submission />

</MockedProvider>

);

const addListingButton = await findByText('Create Art Listing');

fireEvent.click(addListingButton);

const addListingMutationMock = mocks[0].newData;

await wait(() => expect(addListingMutationMock).toHaveBeenCalled());

});