import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import welcomeBackground from '../images/landing-page/header-background.png'
import howToStep1 from '../images/landing-page/how-step-1.png'
import howToStep2 from '../images/landing-page/how-step-2.png'
import howToStep3 from '../images/landing-page/how-step-3.png'

const useStyles = makeStyles(theme => ({
    welcome : {
        backgroundImage: `url(${welcomeBackground})`
    }
}))

const MainPage = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.welcome}>
                <h1>Student Art Co</h1>
                <p>Welcome message with links for call to action</p>
            </div>
            <div>
                <p>Explanation of how the application works</p>
            </div>
            <div>
                <p>Explanation of how one can sign up to use the application for their school</p>
            </div>
            <footer>
                <p>Site Footer</p>
            </footer>
        </>
    )
}

export default MainPage