import React from 'react'
import { CardMedia } from '@material-ui/core'
import FoxArt from '../images/unsplash-art-1.jpg'
import styled from 'styled-components'

const FoxImg = styled.image `
    background-image:  src={FoxArt}
`


const Team = () => {
    return (
        <section className='top-section'>
            <div>
            <img src={FoxArt} alt='fox art img' width='100%' height='1%'/>
            </div>
            
            <h2>Meet Our Team</h2>
        </section>
    )
}

export default Team