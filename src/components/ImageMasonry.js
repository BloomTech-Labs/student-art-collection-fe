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
} from '@material-ui/core'
import Spinner from './GraphLoading'
import ErrorMessage from './GraphErrors'
import ReloadContext from './ReloadContext'
import styled from 'styled-components'
import CategorySelection from './CategorySelection';
import {SubmitButton} from '../styles/muiButtons'
import SearchButton from './SearchButton';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';

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
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
}))

const ImageMasonry = () => {
  const [category, setCategory] = useState('')
  const { reload, setReload, setArtId } = useContext(ReloadContext)
  const { error, loading, data, refetch } = useQuery(GET_ALL_ART)
  const classes = useStyles()
  const [zipcode, setZipcode] = useState('')
  const [searchData, setSearchData] = useState([])
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
          <Quote>
            "Art enables us to find ourselves and lose ourselves at the same
            time."
          </Quote>
          <br />
          <Author>-Thomas Merton</Author>
        </TopDash>
        <ArtSect>
        <Grid container direction = 'row' alignItems='center' style={{ width:'50%', height:'4%', marginLeft:'25%', marginTop:'-5%', marginBottom: '2%'}}>
        <Grid item xs={12} sm={4}>
          <h2 style={{marginLeft: '7%'}}>Search by:</h2>
        </Grid>
          <Grid item xs={12} sm={4} style={{marginLeft:'-5%'}}>
          {/* <h3>Category</h3> */}
          <CategorySelection cat={category} setCat={setCategory}/>
          </Grid>
          <Grid item xs={12} sm={4}>
          {/* <h3>Zipcode</h3> */}
          <SearchIcon />
          <input type="text" value={zipcode} onChange={e => setZipcode(e.target.value)} placeholder="zipcode" style={{marginBottom:'5%'}}></input>
          {/* <SubmitButton>
            <SearchButton cat={category} zip={zipcode}/>
          </SubmitButton> */}
          </Grid>
          </Grid>
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
  height: 600px;
  color: #f5f5f5;
  width: 100%;
  margin-top: -120px;
  padding: 0;
  font-size: 3rem;
`

const ArtSect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
`

const Author = styled.text`
  color: #ffaa04;
`

const Quote = styled.text`
  padding-left: 10px;
  padding-right: 10px;
`

export default ImageMasonry
