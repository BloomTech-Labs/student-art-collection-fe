import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  makeStyles,
  Button,
  Backdrop,
  Fade,
  Grid,
  Modal,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(38, 104, 99, .5)',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    color: '#E9B654',
    fontSize: '2rem',
  },
  paper: {
    maxWidth: '50%',
    padding: theme.spacing(8),
    border: '2px solid #000',
    backgroundColor: '#266863',
    boxShadow: theme.shadows[5],
    color: '#fff',
  },
}))

const NotificationModal = ({ open, handleClose, message }) => {
  const classes = useStyles()

  return (
    <Modal
      aria-labelledby='information updated'
      aria-describedby='information successfully updated'
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Grid
          container
          direction='column'
          justify='center'
          className={classes.paper}
        >
          <Grid item>
            <Grid container>
              <Grid item xs={9} />
              <Grid item xs={3}>
                <Button onClick={handleClose} className={classes.button}>
                  X
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item xs={3} />
              <Grid item xs={6}>
                <Typography component='h2' variant='h2'>
                  {message}
                </Typography>
              </Grid>
              <Grid item xs={3} />
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  )
}

export default NotificationModal
