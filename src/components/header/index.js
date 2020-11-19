import React from 'react'
import StyledInput from 'components/input'
import logo from 'assets/logo.png'
import { Link } from 'react-router-dom'
import { StyledHeader, ImgDiv, InputDiv, HeaderLogo } from './styled'

const Header = () => {
  return (
    <StyledHeader>
      <ImgDiv>
        <Link to='/'>
          <HeaderLogo src={logo} alt='logo' />
        </Link>
      </ImgDiv>
      <InputDiv>
        <StyledInput placeholder='Procure seu herói' width='80%' />
      </InputDiv>
    </StyledHeader>
  )
}

export default Header
