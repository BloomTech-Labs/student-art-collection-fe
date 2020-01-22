import React from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

const HideOnScroll = props => {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
