import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import EditForm from './EditForm.js'
import ErrorMessage from '../GraphErrors';
import Spinner from '../GraphLoading';

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

const EditSubmission = (props) => {
    const id = props.match.params.id
    const propData = props
    const { error, loading, data } = useQuery(GET_ART, {variables: { id }}) 

    if (error) {
        return <ErrorMessage />
    } 
    
    if (loading) {
        return <Spinner />
    }
    
    if (data) {
        return <EditForm info={data} propData={propData}  />
    };
    
};

export default EditSubmission;
