import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo'

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`

function AddTodo() {
  let input
  const [addTodo, { data }] = useMutation(ADD_TODO)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo({ variables: { type: input.value } })
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}
