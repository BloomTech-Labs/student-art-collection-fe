import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const FileUpload = props => {
  const onDrop = files => {
    props.setFile(files[0])
  }

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/jpeg, image/png',
    multiple: false,
    onDrop: onDrop,
  })

  const files = acceptedFiles.map(file => <li key={file.path}>{file.name}</li>)

  return (
    <div className='container'>
      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop a file here, or click to select a file</p>
      </Container>
      <ul>{files}</ul>
    </div>
  )
}

const getColor = props => {
  if (props.isDragAccept) {
    return '#00e676'
  }
  if (props.isDragReject) {
    return '#ff1744'
  }
  if (props.isDragActive) {
    return '#2196f3'
  }
  return '#3CBBB1'
}

const Container = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #006f65;
  outline: none;
  transition: border 0.24s ease-in-out;
`

export default FileUpload
