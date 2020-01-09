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

//todo image carousel

const GET_ART = gql`
  query art($id: ID!) {
    art(id: $id) {
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
  back: {
    padding: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: '50%',
  },
}))

const SinglePage = props => {
  const id = props.match.params.id //? probably not the best way to do this...
  const { error, loading, data } = useQuery(GET_ART, { variables: { id } })
  const [expanded, setExpanded] = useState(false)
  const classes = useStyles()

  if (error) {
    return <div>Error...</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  if (data) {
    return (
      <Container>
        <Card>
          <CardActions>
            <ArrowBackIcon
              onClick={() => props.history.goBack()}
              className={classes.back}
            />
          </CardActions>
          <CardContent>
            <ImageCarousel info={data.art.images} />
          </CardContent>
          <CardContent>
            <ArtInfo info={data.art} />
          </CardContent>
          <CardActions>
            <Button
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label='Contact school about purchasing'
              className={classes.expand}
              endIcon={<ExpandMoreIcon />}
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
