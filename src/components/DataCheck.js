import React from 'react'

//? Easier way to display data
//* Just import this into the component you're checking...
//* Use like any other imported component...
//* Pass it a data prop
//? Like so...
//* <DataCheck data={data} />

export const DataCheck = data => (
  <pre
    style={{
      padding: '20px',
      backgroundColor: 'lightgrey',
      fontSize: '20px',
    }}
  >
    {JSON.stringify(data, null, 2)}
  </pre>
)
