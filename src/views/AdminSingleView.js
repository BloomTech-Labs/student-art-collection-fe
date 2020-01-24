import React, {useContext} from 'react'
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
  const {setReload} = useContext(ReloadContext)
  const id = props.match.params.id
  const { error, loading, data } = useQuery(GET_ART, {variables: {id}, fetchPolicy: "no-cache"})
  const [deleteArt] = useMutation(DELETE_ART)

  // KEEPING THESE UNTIL CONFIRMED WORKING ON STAGING/PRODUCTION
  // eslint-disable-next-line
  // useEffect(() => {
  //   if(reload === true) {
  //     function update() {
  //       return refetch({variables: {id}})
  //     }
  //     update()
  //     setReload(false)
  //   }
  // }, [])

  // useEffect(() => {
  //  if (reload === true) {
  //    window.location.reload()
  //  }
  // }, [])

  const handleDelete = () => {
    deleteArt({ variables: { id } })
    setReload(true)
    props.history.push('/admin/dashboard')
  }

  const handleEdit = () => {
    props.history.push(`/admin/artwork/${id}/edit`)
  }


  if (error) {
    console.log('error', error)
    return <ErrorMessage />
  }
  if (loading) {
    return <Spinner />
  }
  if (data) {
    return (
        <Container style={{ marginTop: '100px', marginBottom: '100px' }}>
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
