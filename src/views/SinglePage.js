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
  IconButton,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { BackButton } from '../styles/muiButtons'
import { formStyles } from '../styles/muiForms'
import {
  Contact,
  ArtInfo,
  ImageCarousel,
  Spinner,
  ErrorMessage,
} from '../components'

//todo image carousel

const GET_ART = gql`
  query art($id: ID!) {
    art(id: $id) {
      price
      sold
      title
      artist_name
      description
      date_posted
      school {
        school_id
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

const SinglePage = props => {
  const id = props.match.params.id
  // const id = props.match.params.id //? probably not the best way to do this...
  const { error, loading, data } = useQuery(GET_ART, { variables: { id }, fetchPolicy: "no-cache" })
  const [expanded, setExpanded] = useState(false)
  const classes = formStyles()

  if (error) {
    console.log('error', error)
    console.error('error', error)
    return <ErrorMessage />
  }
  if (loading) {
    return <Spinner />
  }
  if (data) {
    return (
      <Container style={{ marginTop: '150px', marginBottom: '100px' }}>
        <Card>
          <CardActions>
            <IconButton
              size='small'
              children={<BackButton />}
              onClick={() => props.history.goBack()}
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
