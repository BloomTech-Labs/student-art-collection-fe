import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import EditForm from './EditForm.js'
import ErrorMessage from '../GraphErrors';
import Spinner from '../GraphLoading';
import {useHistory} from 'react-router-dom';

const GET_ART = gql`
    query art($id: ID!) {
        art(id: $id) {
            id, 
            price
            sold,
            title,
            artist_name,
            description,
            school {
                school_name
            }
            images {
                image_url
            }
            category {
                id
                category
            }
        }
    }
`;

const UPDATE_ART = gql`
    mutation
        updateArt(
            $id: ID!
            $title: String!
            $price: Int!
            $artist_name: String!
            $sold: Boolean
            $description: String!
        ) {
            updateArt(
                id: $id
                title: $title
                price: $price
                artist_name: $artist_name
                sold: $sold
                description: $description
            ) {
                title
                price
                artist_name
                sold
                description
            }
        }
`;


const EditSubmission = (props) => {
    const id = props.match.params.id
    const [updated, setUpdated] = useState(false)
    
    const[art, { error, loading, data }] = useQuery(GET_ART) 
    useEffect(() => {
        art({
            variables: {
                id
            }
        })
    }, [updated])

    const onUpdate = () => {
        setUpdated(!updated)
    }

    if (error) {
        return <ErrorMessage />
    } 
    
    if (loading) {
        return <Spinner />
    }
    
    if (data) {
        return <EditForm info={data} /* onUpdate={onUpdate} */ />
    };
    
};

export default EditSubmission;
