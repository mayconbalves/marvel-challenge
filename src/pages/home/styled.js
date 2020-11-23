import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
`

export const LogoContainer = styled.div`
  text-align: center;
  width: 100%;
`

export const StyledDiv = styled.div`
  text-align: center;
  width: 100%;
`

export const StyledTitle = styled.h1`
  text-transform: uppercase;
`

export const StyledSubTitle = styled.p`
  color: #b9b9b9;
`

export const HeroDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OrderHero = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`

export const Content = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  margin: 25px 0;
`

export const OnlyCard = styled.div`
  cursor: pointer;
  display: grid;
  height: 240px;
  width: 200px;
  text-align: center;
  margin: 0 auto;
`

export const OrderButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0 10px;
  cursor: pointer;
`
