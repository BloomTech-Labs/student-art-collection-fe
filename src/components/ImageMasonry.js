import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container
  // TextField,
  // Button,
} from '@material-ui/core'
import Spinner from './GraphLoading'
import ErrorMessage from './GraphErrors'
import ReloadContext from './ReloadContext'
import styled from 'styled-components'
// import CategorySelection from './CategorySelection'
// import { SubmitButton } from '../styles/muiButtons'
// import SearchButton from './SearchButton'

import { SearchForm } from './SearchForm'

const GET_ALL_ART = gql`
  query {
    allArts {
      id
      title
      school {
        school_name
      }
      images {
        image_url
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  cardSize: {
    maxWidth: '1000px',
    maxHeight: '1000px',
  },
  cardWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  },
  mediaTitle: {
    fontFamily: 'Barlow',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  MuiSelect: {
    marginTop: '8px',
    marginBottom: '8px'
  },

}))

const ImageMasonry = () => {
  // const [category, setCategory] = useState('')
  const { reload, setReload, setArtId } = useContext(ReloadContext)
  const { error, loading, data, refetch } = useQuery(GET_ALL_ART)
  const classes = useStyles()
  // const [zipcode, setZipcode] = useState('')
  // const [searchData, setSearchData] = useState({ category, zipcode })

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
    return <ErrorMessage />
  }
  if (loading) {
    return <Spinner />
  }
  if (data) {
    return (
      <>
        
          <TopDash>
          <Container style={{ width: '100%', backgroundColor: '#000' }}>
            <Quote>
              "Art enables us to find ourselves and lose ourselves at the same
              time."
            </Quote>
            <br />
            <Author>-Thomas Merton</Author>
            </Container>
          </TopDash>
        <ArtSect>
          <h1>Search by...</h1>
          <SearchForm />

          {/* <SearchButton type="submit" cat={category} zip={zipcode} setDat={setSearchData}/> */}
          {/* <SearchButton /> */}
          <Grid container spacing={4} className={classes.cardWrap}>
            {data.allArts.map(art => (
              <Grid item key={art.id}>
                <Card className={classes.cardSize}>
                  <CardActionArea
                    component={Link}
                    to={`/artwork/${art.id}`}
                    onClick={() => setArtId(art.id)}
                  >
                    <CardMedia
                      component='img'
                      src={art.images[0].image_url}
                      alt={art.title === '' ? 'Untitled' : art.title}
                      title={art.title === '' ? 'Untitled' : art.title}
                    />
                    <CardContent>
                      <Typography className={classes.mediaTitle}>
                        Title: {art.title === '' ? 'Untitled' : art.title}
                      </Typography>
                      <Typography
                        className={classes.mediaTitle}
                        variant={'h6'}
                        component='p'
                      >
                        School:{' '}
                        {art.school === ''
                          ? 'School Name Needed'
                          : art.school.school_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ArtSect>
      </>
    )
  }
}

//styling
const TopDash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: 'Barlow';
  background-color: #000;
  height: 30vh;
  color: #f5f5f5;
  width: 100%;
  margin-top: -300px;
  padding-top: 200px;
`

const ArtSect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`

const Author = styled.text`
  color: #ffaa04;
  font-size: 2.5rem;
`

const Quote = styled.text`
  padding-top: 10px;
  font-size: 2.5rem;
`

export default ImageMasonry
