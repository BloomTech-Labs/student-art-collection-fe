import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import welcomeBackground from '../images/landing-page/header-background.png'
import howToStep1 from '../images/landing-page/how-step-1.png'
import howToStep2 from '../images/landing-page/how-step-2.png'
import howToStep3 from '../images/landing-page/how-step-3.png'
import one from '../images/landing-page/number-one.png'
import two from '../images/landing-page/number-two.png'
import three from '../images/landing-page/number-three.png'

const useStyles = makeStyles(theme => ({
    welcomeHeroStyles: {
        backgroundImage: `url(${welcomeBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        padding: '2%',
        marginBottom: '2%',
        marginTop: '3%',
    },
    welcomeMessageContainerStyles: {
        left: '0px',
        padding: '2%',
        background: 'rgba(0,0,0,0.75)',
        color: '#FFFFFF',
        width: '75%'
    },
    welcomeLinkContainerStyles: {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        color: '#000000',
        textAlign: 'center',
        padding: '2%',
        cursor: 'pointer'
    },
    howToSection: {
        marginBottom: '2%'
    },
    howToContent: {
        padding: '5%'
    },
    howToItem: {
        textAlign: 'center'
    },
    bringArtCoSection: {
        marginBottom: '2%',
        backgroundColor: '#E9B654'
    },
    bringArtCoContent: {
        padding: '2%'
    },
    footer: {
        textAlign: 'center'
    }
}))

const MainPage = () => {
    const classes = useStyles()
    const history = useHistory()

    const lookingArtClickhandler = () => {
        history.push('/browse')
    }

    const adminClickHandler = () => {
        history.push('/register')
    }

    return (
        <>
            <Grid container direction='column' spacing={3}>
                <Grid className={classes.welcomeHeroStyles} item xs={12}>
                    <Grid className={classes.welcomeMessageContainerStyles} container spacing={3} alignItems='center' justify='space-evenly'>
                        <Grid item xs={12}>
                            <Typography variant="h2">
                                Welcome to Student Artco
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h3'>
                                Support your local schools today!
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h4'>
                                I am...
                            </Typography>
                        </Grid>
                        <Grid onClick={lookingArtClickhandler} className={classes.welcomeLinkContainerStyles} item xs={4}>
                            <Typography variant='p'>
                                Looking for Art
                            </Typography>
                        </Grid>
                        <Grid onClick={adminClickHandler} className={classes.welcomeLinkContainerStyles} item xs={4}>
                            <Typography variant='p'>
                                An Administrator
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.howToSection} item xs={12}>
                    <Grid className={classes.howToContent} container spacing={3} justify='center' alignItems='center'>
                        <Grid item xs={12}>
                            <Typography variant='h5'>
                                What is Student Artco?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='p'>
                                Student ArtCo is a platform that facilitates fund-raising for your school's art program by helping to sell art made by students. School art programs are typically underfunded and research shows that students create their best work when it is more than just an assignment. We provide a place where a local community and beyond can visit to see art created by students and purchase it to support an art program. Using the latest technology, we host examples of your student's artwork and make it available for purchase to a wide audience. We want to inspire hope in young artists by showing how far our (and your school's) reach can go and by showing how a local community can come together to provide opportunities to young artists.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5'>
                                As easy as 1, 2, 3!
                            </Typography>
                        </Grid>
                        <Grid className={classes.howToItem} item xs={12} md={4}>
                            <img src={one} alt='the number one' />
                        </Grid>
                        <Grid className={classes.howToItem} item xs={12} md={4}>
                            <Typography variant='p'>
                                Start here or with one of our mobile apps
                            </Typography>
                        </Grid>
                        <Grid className={classes.howToItem} item xs={12} md={4}>
                            <img src={howToStep1} alt='person standing facing left tapping screen of a mobile phone' />
                        </Grid>
                        <Grid className={classes.howToItem} item xs={12} md={4}>
                            <img src={two} alt='the number two' />
                        </Grid>
                        <Grid className={classes.howToItem} item xs={12} md={4}>
                            <Typography variant='p'>
                                Enter your school's information
                            </Typography>
                        </Grid>
                        <Grid className={classes.howToItem} item xs={12} md={4}>
                            <img src={howToStep2} alt='mobile phone showing zip code 08032 on the display' />
                        </Grid>
                        <Grid className={classes.howToItem} item xs={12} md={4}>
                            <img src={three} alt='the number three' />
                        </Grid>
                        <Grid className={classes.howToItem} item xs={12} md={4}>
                            <Typography variant='p'>
                                Start supporting your community!
                            </Typography>
                        </Grid>
                        <Grid className={classes.howToItem} item xs={12} md={4}>
                            <img src={howToStep3} alt='person standing reaching out to a shopping cart icon on a web browser' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.bringArtCoSection} item xs={12}>
                    <Grid className={classes.bringArtCoContent} container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='h5'>
                                Looking to bring Student ArtCo to your school?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='p'>
                                Joining our platform is easy and within a few minutes you can have art listings up to share with your community and anyone online. All you need is pictures of the artwork to show it off and we can help with the rest. We provide a unique link for every piece of artwork that you can share with anyone. We have mobile apps available for both Android and iOS that allow you to manage your listings from anywhere. Others can use the apps to browse the available artwork and contact you to inquire about purchasing and making a donation.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justify='center'>
                        <Grid item xs={12}>
                            <footer className={classes.footer}>
                                <p>&copy; 2020</p>
                            </footer>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>   
        </>
    )
}

export default MainPage