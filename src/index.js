import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { onError } from 'apollo-link-error'

// const errorLink = onError(({ graphQLErros }) => {
//   if (graphQLErros) graphQLErros.map(({ message }) => console.log(message))
// })

const client = new ApolloClient({
  uri: process.env.REACT_APP_DATABASE_URL
    ? process.env.REACT_APP_DATABASE_URL
    : 'http://localhost:4000/graphql',
  //   link: ApolloLink.from([errorLink]),
})
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
