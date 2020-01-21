import React from 'react'
import { CardMedia } from '@material-ui/core'
import FoxArt from '../images/unsplash-art-1.jpg'


const Team = () => {
    return (
        <section className='top-section'>
            <div>
            <img src={FoxArt} alt='fox art img' />
            </div>
            
            <h2>Meet Our Team</h2>
        </section>
    )
}

export default Team