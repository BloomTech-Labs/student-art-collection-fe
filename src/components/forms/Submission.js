import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

//Should category be int or string?
const SUBMISSION = gql`
    mutation submitArt ( 
        $category: Int! 
        $price: Int!
        $artist_name: String!
        $sold: Boolean!
        $description: String!
    ) {
        submitArt(
            category: $category
            price: $price
            artist_name: $artist_name
            sold: $sold
            description: $description
        ) {
            category
            price
            artist_name
            sold
            description
        }
    } 
    `;

    const Submission = () => {
        const [category, setCategory] = useState('');
        const [price, setPrice] = useState('');
        const [artistName, setArtistName] = useState('');
        // const [sold, setSold] = useState(''); *should include this when updating item, plan is to use radio for check-mark to verify if sold or not (boolean)
        const [description, setDescription] = useState('');

        const [submitArt, {data, loading, error}] = useMutation(SUBMISSION);

        const onSubmit = e => {
            e.preventDefault();
            submitArt({
                variables: {category, price, artistName, description}
            });
        };

        if (error) {
            <div>Error...</div>;
        }
        if (loading) {
            <div>Loading...</div>;
        }
        if (data){
            //to-do
        }

        return(
            <>
                <form onSubmit = {onSubmit}>
                    <input
                        type = 'text'
                        name = 'category'
                        value = {category}
                        onChange = {e => setCategory(e.target.value)}
                        required
                    />

                    <input
                        type = 'text'
                        name = 'price'
                        value = {price}
                        onChange = {e => setPrice(e.target.value)}
                        required
                    />

                    <input
                        type = 'text'
                        name = 'artistName'
                        value = {artistName}
                        onChange = {e => setArtistName(e.target.value)}
                        required
                    />

                    <input
                        type = 'text'
                        name = 'description'
                        value = {description}
                        onChange = {e => setDescription(e.target.value)}
                        required
                    />

                    <button type = 'submit'>Create Art Listing</button>

                </form>
            </>
        );

    };

    export default Submission;