import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  Container,
  Button,
  makeStyles,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Contact, ArtInfo, ImageCarousel } from '../components'

//todo art(id: ) needs to take in the id set into state by the user clicking on an
//todo artwork on the browse page
//todo image carousel
//todo functional back button

const GET_ART = gql`
  query art {
    art(id: 1) {
      id
      school_id
      price
      sold
      title
      artist_name
      description
      date_posted
      school {
        school_name
        email
        address
        city
        zipcode
      }
      images {
        image_url
      }
      category {
        category
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  expand: {
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}))

const SinglePage = () => {
  const { error, loading, data } = useQuery(GET_ART)
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles()

  if (error) {
    return <div>Error...</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  if (data) {
    // console.log(`singlepage data >>>`, data)
    return (
      <Container>
        <Card>
          <CardActions>
            <ArrowBackIcon />
          </CardActions>
          <CardContent>
            <ImageCarousel info={data.art.images} />
          </CardContent>
          <CardContent>
            <ArtInfo info={data.art} />
          </CardContent>
          <CardActions>
            <Button
              endIcon={<ExpandMoreIcon />}
              className={classes.expand}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label='Contact school about purchasing'
            >
              Contact school about purchasing
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Contact info={data.art.school} />
            </CardContent>
          </Collapse>
        </Card>
      </Container>
    )
  }
}

export default SinglePage
