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

export const Card = styled.div`
  cursor: pointer;
  display: grid;
  height: 240px;
  width: 100%;
  text-align: center;
  transition: transform 0.7s;

  &:hover {
    transform: scale(1.2);
  }
`

export const CardImg = styled.img`
  height: 200px;
  width: 100%;
  border-bottom: 7px solid red;
`

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 20px;
  }
`
