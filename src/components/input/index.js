import React from 'react'
import { string, func } from 'prop-types'
import { InputStyled } from './styled'

const Input = (
  {
    onKeyDown,
    onChange,
    placeholder,
    value,
    width,
    type,
    name
  }) => {
  return (
    <InputStyled
      onKeyDown={onKeyDown}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      width={width}
      type={type}
      name={name}
    />
  )
}

Input.propTypes = {
  onKeyDown: func,
  onChange: func,
  placeholder: string,
  value: string,
  width: string,
  type: string,
  name: string
}

export default Input
