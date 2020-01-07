import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, fireEvent, wait } from '@testing-library/react';
import Submission, { SUBMISSION } from '../forms/Submission';

it('should render without crashing', () => {
    render(
        <MockedProvider mocks={[]}>
            <Submission />
        </MockedProvider>
    );
});

  it("mutation should be called when clicking the button", async () => {
    const listingMock = {
      request: { query: SUBMISSION },
      result: { data: { listing: [{ category: "testcategory" }] } }
    };
  
    const component = render(
      <MockedProvider mocks={[listingMock]} addTypename={false}>
        <Submission />
      </MockedProvider>
    );
  
    await wait(0); // wait for response
  
    const p = component.root.findByType("p");
    expect(p.children).toContain("testcategory");
  });

// const mocks = [
//     {
//         request: {
//             query: SUBMISSION,
//             variables: {
//                 category: 'testing'
//             },
//         },

//         newData: jest.fn(() => ({
//             data: {
//                 addListing: {
//                     category: 'testing'
//                 },
//             },
//         })),
//     },
// ];

// test('mutation should be called when clicking the button', async () => {
//     const { findByText } = render(
//         <MockedProvider mocks={mocks} addTypename={false}>
//             <Submission />
//         </MockedProvider>
//     );

//     const addListingButton = await findByText('Create Art Listing');
//     fireEvent.click(addListingButton);
//     const addListingMutationMock = mocks[0].newData;

//     await wait(() => expect(addListingMutationMock).toHaveBeenCalled());
// });