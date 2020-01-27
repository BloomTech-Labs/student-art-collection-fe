import React, {useState, useContext} from 'react';
import {useLazyQuery} from 'react-apollo';
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

const SearchButton = ({cat, zip, setDat}) => {
    const [searchArt] = useLazyQuery(SEARCH_ART)
    console.log(cat)
    console.log(zip)

    const onSearch = e => {
        e.preventDefault()
        searchArt({variables: {
            category: cat,
            zipcode: zip
        }})
        .then((res) => {
            console.log(res)
        })
    }
    return (
        <div onClick={onSearch}>Search!</div>
    )
}

export default SearchButton;