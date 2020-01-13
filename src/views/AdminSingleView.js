import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from 'react-apollo'
import {
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
} from '@material-ui/core'
import { BackButton } from '../styles/muiButtons'
import {
  ArtInfo,
  EditConsole,
  ErrorMessage,
  ImageCarousel,
  Spinner,
} from '../components'

const GET_ART = gql`
  query {
    #art($id: ID!)
    art(id: 4) {
      id
      price
      sold
      title
      artist_name
      description
      school {
        school_name
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

const DELETE_ART = gql`
  mutation deleteArt($id: ID!) {
    deleteArt(id: $id) {
      id
    }
  }
`

const AdminSingleView = props => {
  const id = props.match.params.id
  const { error, loading, data } = useQuery(GET_ART)
  const [deleteArt] = useMutation(DELETE_ART)

  console.log(`props >>>`, props)

  const handleDelete = () => {
    deleteArt({ variables: { id } })
    props.history.push('/dashboard')
  }

  const handleEdit = () => {
    props.history.push(`/admin/artwork/${id}/edit`)
  }

  if (error) {
    return <ErrorMessage />
  }
  if (loading) {
    return <Spinner />
  }
  if (data) {
    return (
      <Container>
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
            <EditConsole handleEdit={handleEdit} handleDelete={handleDelete} />
          </CardActions>
        </Card>
      </Container>
    )
  }
}

export default AdminSingleView