import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const FileUpload = props => {
  const onDrop = uploads => {
    props.setFile(props.file.concat(uploads)) 
    setFiles(uploads.map(file => {
      console.log('file', file)
      return Object.assign(file, {
      preview: URL.createObjectURL(file)
  
    })}));

  }
  const [files, setFiles] = useState([]);

  const {getRootProps, 
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject, 
  } = useDropzone({
    accept: 'image/jpeg, image/png',
    multiple: true,
    onDrop: onDrop
  })

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        alt = 'pic'/>
      </div>
    </div>
  ));

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);


  return (
    <div className='container'>
    <Container
      {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a file here, or click to select a file</p>
      </Container>

      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </div>  
  );
}

export default FileUpload


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

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

