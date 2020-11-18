import React from 'react'
import { string } from 'prop-types'
import { InputStyled } from './styled'

const Input = ({ onChange, placeholder }) => {
  return (
    <InputStyled
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  placeholder: string
}

export default Input
