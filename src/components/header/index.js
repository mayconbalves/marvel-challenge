import React from 'react'
import StyledInput from 'components/input'
import logo from 'assets/logo.png'
import { StyledHeader, ImgDiv, InputDiv } from './styled'

const Header = () => {
  return (
    <StyledHeader>
      <ImgDiv>
        <img src={logo} alt='logo' />
      </ImgDiv>
      <InputDiv>
        <StyledInput placeholder='Procure seu herói' />
      </InputDiv>
    </StyledHeader>
  )
}

export default Header
