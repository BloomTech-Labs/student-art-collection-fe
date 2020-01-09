import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  Button,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Contact, Navigation } from '../components'
// import { Contact, ImageCard } from '../components'

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
    return (
      // <Grid container direction='column' alignItems='center'>
      <>
        <Navigation />
        <Card>
          <CardActions disableSpacing>
            <Button
              endIcon={<ExpandMoreIcon />}
              className={classes.expand}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label='Contact school about purchase'
            >
              Contact school about purchase
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Contact />
            </CardContent>
          </Collapse>
        </Card>
      </>
      // </Grid>
    )
  }
}

export default SinglePage
