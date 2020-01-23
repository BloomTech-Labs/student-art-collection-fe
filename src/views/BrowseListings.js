import React from 'react'
import { ImageMasonry } from '../components'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

//todo heading should be all caps i.e. text-transform: uppercase

const BrowseListings = () => {
  return (
    <ContainerDiv>
      <Grid container direction='column'>
        <Grid item component='header'>
          <Grid container direction='column' spacing={5}></Grid>
        </Grid>
        <Grid item>
          <ImageMasonry />
        </Grid>
      </Grid>
    </ContainerDiv>
  )
}

const ContainerDiv = styled.div`
  margin-top: 100px;
`

export default BrowseListings
