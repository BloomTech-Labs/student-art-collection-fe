import React, { useState } from 'react';
import { useLazyQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { SubmitButton } from '../styles/muiButtons';
import CategorySelection from './CategorySelection';
import { 
    FormControl,
    FormHelperText,
    Input,
    InputLabel
} from '@material-ui/core';

const SEARCH_ART_COMPLETE = gql`
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

const SEARCH_ART_ZIPCODE = gql`
    query (
        $zipcode: String
    ) {
        filter(filter: { zipcode: {eq: $zipcode} })
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

const SEARCH_ART_CATEGORY = gql`
    query (
        $category: String
    ) {
        filter(filter: { category: {eq: $category} })
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
    const [category, setCategory] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [search, setSearch] = useState({category, zipcode})
    const [searchArt, {error: fullError, loading: fullLoading, data: fullData}] = useLazyQuery(SEARCH_ART_COMPLETE, 
    {
        variables: {
            category: category,
            zipcode: zipcode
        },
        fetchPolicy: 'network-only'
    })
    const [searchArtZip, {error: zipError, loading: zipLoading, data: zipData}] = useLazyQuery(SEARCH_ART_ZIPCODE, 
    {
        variables: {
            zipcode: zipcode
        },
        fetchPolicy: 'network-only'
    })
    const [searchArtCat, {error: catError, loading: catLoading, data: catData}] = useLazyQuery(SEARCH_ART_CATEGORY, 
    {
        variables: {
            category: category
        },
        fetchPolicy: 'network-only'
    })

    // const handleSearch = e => {
    //     e.preventDefault()
    //     console.log('clicked')
    //     if (category && zipcode) {
    //         searchArt({variables: {
    //             category: category,
    //             zipcode: zipcode
    //         }})
    //         if (fullError) {
    //             console.log('complete error', fullError)
    //         }
    //         if (fullLoading) {
    //             console.log('complete loading', fullLoading)
    //         }
    //         if (fullData) {
    //             console.log('complete data', fullData)
    //         }
    //     }
    //     else if (category) {
    //         searchArtCat({variables: {
    //             category: category
    //         }})
    //         if (catError) {
    //             console.log('cat error', catError)
    //         }
    //         if (catLoading) {
    //             console.log('cat loading', catLoading)
    //         }
    //         if (catData) {
    //             console.log('cat data', catData)
    //         }
    //     }
    //     else if (zipcode) {
    //         searchArtZip({variables: {
    //             zipcode: zipcode
    //         }})
    //         if (zipError) {
    //             console.log('zip error', zipError)
    //         }
    //         if (zipLoading) {
    //             console.log('zip loading', zipLoading)
    //         }
    //         if (zipData) {
    //             console.log('zip data', zipData)
    //         }
    //     } 
    // }
    
    const handleSubmit = async e => {
        e.preventDefault()
        console.log('search', search)
        console.log('category', category)
        console.log('zipcode', zipcode)
        await setSearch({
            category: category,
            zipcode: zipcode
        })
        console.log('search after submit', search)
    }
    console.log('category outside of submit', category)
    console.log('zipcode outside of submit', zipcode)
    return (
        /* 
        Due to limitations of MaterialUI, we had to use onMouseDown for this handleSearch function.  
        Were we to use onClick, we would run into an issue where the button had to be clicked twice
        in order for the function to properly execute. 
    
        Please read more about this issue here:
        https://github.com/mui-org/material-ui/issues/4532
        */
    <div>

    <h1>Search by..</h1>

        {/* <FormControl onSubmit={e => handleSearch(e)}>
            <h2>Category</h2>
            <CategorySelection cat={category} setCat={setCategory}/>
             <h2>Zipcode</h2> 
             <input type="text" value={zipcode} onChange={e => setZipcode(e.target.value)}></input> 
            <Input id='zipcode-input'></Input>
            <SubmitButton type='submit'>Search</SubmitButton>
        </form> */}
        <form onSubmit={e => handleSubmit(e)}>
            <CategorySelection cat={category} setCat={setCategory} />
            <input type='text' value={zipcode} onChange={e => setZipcode(e.target.value)}></input>
            <button type='submit'>Search!</button>
        </form>
    
    </div>
    )
}

export default SearchButton;
// <button onClick={async e => {
    //     e.preventDefault()
    //     console.log('search before search', search)
    //     setSearch({
        //         ...search,
        //         category,
        //         zipcode
        //     })
        //     console.log('search after search', search)
        //     await searchArtCat()
        //     if (catError) {
            //         console.log(catError)
            //     }
            //     if (catLoading) {
                //         console.log(catLoading)
                //     }
                //     if (catData) {
                    //         console.log(catData)
                    //     }
                    //     // console.log('clicked')
                    //     // console.log('category', category)
                    //     // console.log('zipcode', zipcode)
                    //     // if (category && zipcode) {
                        //     //     searchArt()
                        //     //     if (fullError) {
                            //     //         console.log('complete error', fullError)
                            //     //     }
                            //     //     if (fullLoading) {
                                //     //         console.log('complete loading', fullLoading)
                                //     //     }
                                //     //     if (fullData) {
                                    //     //         console.log('complete data', fullData)
                                    //     //     }
                                    //     // }
                                    //     // else if (category) {
                                        //     //     searchArtCat()
                                        //     //     if (catError) {
                                            //     //         console.log('cat error', catError)
                                            //     //     }
                                            //     //     if (catLoading) {
                                                //     //         console.log('cat loading', catLoading)
                                                //     //     }
                                                //     //     if (catData) {
                                                    //     //         console.log('cat data', catData)
                                                    //     //     }
                                                    //     // }
                                                    //     // else if (zipcode) {
                                                        //     //     searchArtZip()
                                                        //     //     if (zipError) {
                                                            //     //         console.log('zip error', zipError)
                                                            //     //     }
                                                            //     //     if (zipLoading) {
                                                                //     //         console.log('zip loading', zipLoading)
                                                                //     //     }
                                                                //     //     if (zipData) {
                                                                    //     //         console.log('zip data', zipData)
                                                                    //     //     }
                                                                    //     // } 
                                                                    //     }
                                                                // }>Search!</button>