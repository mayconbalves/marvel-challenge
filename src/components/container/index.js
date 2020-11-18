import React from 'react'
import { node, string } from 'prop-types'
import { Grid } from './styled'

const Container = ({ children, color }) => (
  <Grid color={color}>
    {children}
  </Grid>
)

Container.propTypes = {
  children: node.isRequired,
  color: string
}

export default Container
