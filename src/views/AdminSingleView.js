import React, {useEffect, useContext} from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from 'react-apollo'
import ReloadContext from '../components/ReloadContext'
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
  query art($id: ID!) {
    art(id: $id) {
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
  const {reload, setReload} = useContext(ReloadContext)
  const id = props.match.params.id
  const { error, loading, data, refetch } = useQuery(GET_ART, {variables: {id}})
  const [deleteArt] = useMutation(DELETE_ART)

  // eslint-disable-next-line
  useEffect(() => {
    if(reload === true) {
      window.location.reload()
      setReload(false)
    }
  }, [])

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
