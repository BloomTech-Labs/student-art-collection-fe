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
        paddingTop: '50vh'
    },
    welcomeMessageContainerStyles: {
        left: '0px',
        padding: '2%',
        background: 'rgba(0,0,0,0.75)',
        // position: 'absolute',
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
        margin: '7%'
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
                            <Typography variant="h1">
                                Welcome to Student Artco
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h2'>
                                Support your local schools today!
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h2'>
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
                    <Grid className={classes.howToContent} container spacing={3} alignItems='center'>
                        <Grid item xs={12}>
                            <Typography variant='h5'>
                                What is Student Artco?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='p'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at volutpat massa. In pulvinar pellentesque sodales. Curabitur sit amet varius justo. Phasellus aliquam, nisi feugiat consequat facilisis, orci urna porttitor quam, eget lobortis justo ipsum vitae velit. Nullam aliquet scelerisque libero, vel ornare risus consequat quis. Duis molestie, dolor facilisis tristique sagittis, magna magna sodales felis, sit amet sollicitudin felis nunc vitae metus. Nullam maximus malesuada semper. Duis feugiat feugiat elit, varius gravida nunc imperdiet a. Maecenas aliquet aliquet lectus vitae aliquam. Pellentesque eu congue mauris. Maecenas ex erat, congue at maximus rutrum, porta sit amet turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5'>
                                As easy as 1, 2, 3!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container direction='column' alignItems='center'>
                                <Grid className={classes.howToItem} item xs={12}>
                                    <img src={howToStep1} alt='person standing facing left tapping screen of a mobile phone' />
                                </Grid>
                                <Grid className={classes.howToItem} item xs={12}>
                                    <img src={one} alt='the number one' />
                                </Grid>
                                <Grid className={classes.howToItem} item xs={12}>
                                    <Typography variant='p'>
                                        Start here or with one of our mobile apps
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container direction='column' alignItems='center'>
                                <Grid className={classes.howToItem} item xs={12}>
                                    <img src={howToStep2} alt='mobile phone showing zip code 08032 on the display' />
                                </Grid>
                                <Grid className={classes.howToItem} item xs={12}>
                                    <img src={two} alt='the number two' />
                                </Grid>
                                <Grid className={classes.howToItem} item xs={12}>
                                    <Typography variant='p'>
                                        Enter your zip code
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container direction='column' alignItems='center'>
                                <Grid className={classes.howToItem} item xs={12}>
                                    <img src={howToStep3} alt='person standing reaching out to a shopping cart icon on a web browser' />
                                </Grid>
                                <Grid className={classes.howToItem} item xs={12}>
                                    <img src={three} alt='the number three' />
                                </Grid>
                                <Grid className={classes.howToItem} item xs={12}>
                                    <Typography variant='p'>
                                        Start supporting your community!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.bringArtCoSection} item xs={12}>
                    <Grid className={classes.bringArtCoContent} container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant='h5'>
                                Looking to bring Student Artco to your school?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='p'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at volutpat massa. In pulvinar pellentesque sodales. Curabitur sit amet varius justo. Phasellus aliquam, nisi feugiat consequat facilisis, orci urna porttitor quam, eget lobortis justo ipsum vitae velit. Nullam aliquet scelerisque libero, vel ornare risus consequat quis. Duis molestie, dolor facilisis tristique sagittis, magna magna sodales felis, sit amet sollicitudin felis nunc vitae metus. Nullam maximus malesuada semper. Duis feugiat feugiat elit, varius gravida nunc imperdiet a. Maecenas aliquet aliquet lectus vitae aliquam. Pellentesque eu congue mauris. Maecenas ex erat, congue at maximus rutrum, porta sit amet turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
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