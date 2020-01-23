import { withStyles, Container } from '@material-ui/core'

export const AppContainer = withStyles({
    root: {
        maxWidth: '100%',
        height: '100vh',
        margin: '0',
        padding: '0'
    }
})(Container)
