import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import { 
  Grid, 
  Typography,
  Container,
  Card,
  CardContent,
  IconButton 
} from '@material-ui/core'
import {
  ErrorMessage,
  Spinner,
  ReloadContext,
  ImageMasonry,
} from '../components'
import { BackButton } from '../styles/muiButtons';

const SEARCH_ART = gql`
  query searchArt($zipcode: String, $category: String) {
    filter(filter: { zipcode: { eq: $zipcode }, category: { eq: $category } }) {
      id
      title
      school {
        school_name
        zipcode
      }
      images {
        image_url
      }
      price
      sold
      category {
        id
        category
      }
    }
  }
`

const SearchResults = ({ location }) => {
  const { cat, zip } = location.state.newSearch
  const { reload, setReload, setArtId } = useContext(ReloadContext)
  const { error, loading, data, refetch } = useQuery(SEARCH_ART, {
    variables: { zipcode: zip, category: cat },
  })
  const history = useHistory()

  useEffect(() => {
    if (reload === true) {
      function update() {
        return refetch()
      }
      update()
      setReload(false)
    }
  })

  if (error) {
    return (
      <Grid container direction='column' alignItems='center' spacing={5}>
        <Grid item>
          <ErrorMessage />
        </Grid>
      </Grid>
    )
  }
  if (loading) {
    return (
      <Grid container direction='column' alignItems='center' spacing={5}>
        <Grid item>
          <Spinner />
        </Grid>
      </Grid>
    )
  }
  if (data) {
    console.log(`data >>>`, data)
    console.log(`filter >>>`, data.filter)
    if (data.filter.length === 0) {
      return (
        <Container style={{marginTop: '50px'}}>
        <Card>
          <CardContent>
            <Grid container alignItems='center' justify='space-between'>
              <Grid item xs={3}>
                <IconButton
                  size='small'
                  children={<BackButton />}
                  component={Link}
                  to='/browse'
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant='body1' component='h2'>
                  No results found, please try again!
                </Typography>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
      )
    } else {
      return (
        <>
        
      <Grid
          container
          direction='column'
          alignItems='center'
          spacing={5}
          style={{ marginTop: '50px' }}
        >
          <Grid item>
          <IconButton
              size='small'
              children={<BackButton />}
              onClick={() => history.goBack()}
            />
          </Grid>
          <Grid item>
            <ImageMasonry art={data.filter} />
          </Grid>
        </Grid>
        </>
      )
    }
  }
}

export default SearchResults
