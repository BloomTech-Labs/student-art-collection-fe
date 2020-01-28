import React, {useState, useContext} from 'react';
import {useQuery} from 'react-apollo';
import {gql} from 'apollo-boost';
import ReloadContext from './ReloadContext';

const SEARCH_ART = gql`
    query (
        $zipcode: String
        $category: String
    ) {
        filter(filter: {zipcode: {eq: $zipcode} category: {eq: $category}})
        {
            id
            title
            school {
                school_name
            }
            images {
                image_url
            }
            price
            sold
            category {
                id
                category
            }
            school {
                zipcode
            }
        }
    }
`

const SearchButton = ({cat, zip}) => {
    const {error, loading, data} = useQuery(SEARCH_ART)
    console.log(cat)
    console.log(zip)
    return (
        <div>Search!</div>
    )
}

export default SearchButton;