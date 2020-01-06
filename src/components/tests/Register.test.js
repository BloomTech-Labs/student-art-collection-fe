import React from 'react';

import { MockedProvider } from '@apollo/react-testing';

import { render, fireEvent, wait } from '@testing-library/react';

import Register, { REGISTER_USER } from '../forms/Register';

const mocks = [

{

request: {

query: REGISTER_USER,

variables: {

email: 'me@gmail.com',

password: 'jdp123',

schoolName: 'testsch',

address: 'testadd',

city: 'testcity',

zipcode: 'testzip'

}

},

newData: jest.fn(() => ({

data: {

register: {

id: '24',

email: 'me@gmail.com',

password: 'jdp123',

schoolName: 'testsch',

address: 'testadd',

city: 'testcity',

zipcode: 'testzip'

},

},

})),

},

]

test('<Register />', async () => {

const { findByText } = render(

<MockedProvider>

<Register />

</MockedProvider>

);

const registerUserButton = await findByText('Submit');

fireEvent.click(registerUserButton);

const registerUserMutationMock = mocks[0].newData;

await wait(() => expect(registerUserMutationMock).toHaveBeenCalled());

});