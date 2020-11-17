import React from 'react'
import { node } from 'prop-types'
import { Grid } from './styled'

const Container = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  )
}

Container.propTypes = {
  children: node.isRequired
}

export default Container
