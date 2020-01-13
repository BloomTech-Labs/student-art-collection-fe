import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from 'react-apollo';

const GET_IMAGES = gql`
query {
    allImages {
      id
      image_url
    }
  }
`

export const Images = () => {
    const{loading, error, data} = useQuery(GET_IMAGES)

    if (loading) {
        return (
            <div>Loading...</div>
        )
    } 
    if (error) {
        return (
            <div>Error...</div>
        )
    } 
    if (data) {
        // using this instead of useState as the latter causes an infinite loop
        const images = data.allImages
        
        return (
        <>
        {images.map((item) => (
            <img key={item.id} src={item.image_url} alt="gallery working" />
        )
        )}
        </>
        )
    }
}

