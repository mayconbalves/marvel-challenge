import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCharacters } from './actions'
import logo from 'assets/logo.png'
import heroImg from 'assets/superhero.png'
import emptyHeart from 'assets/empty_heart.png'
import Container from 'components/container'
import InputStyled from 'components/input'
import {
  LogoContainer,
  StyledDiv,
  StyledTitle,
  StyledSubTitle,
  HeroDiv,
  OrderHero,
  Content,
  Card,
  CardImg,
  CardInfo,
  Grid
} from './styled'

const Home = () => {
  const dispatch = useDispatch()
  const allCharacters = useSelector(state => state.charactersReducer.characters) || []

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  return (
    <Container color='#fff'>
      <Grid>
        <LogoContainer>
          <StyledDiv>
            <img src={logo} alt='logo' />
          </StyledDiv>
          <StyledDiv>
            <StyledTitle>Explore o universo</StyledTitle>
            <StyledSubTitle>
              Mergulhe no domínio deslumbrante de todos os
              personagens clássicos que você ama - e aquelas
              que você descobrirá em breve!
            </StyledSubTitle>
          </StyledDiv>
          <StyledDiv>
            <InputStyled placeholder='Procure por heróis' />
          </StyledDiv>
        </LogoContainer>
        <StyledDiv>
          <HeroDiv>
            <div>
              <p>{`Encontramos ${allCharacters.length} heróis`}</p>
            </div>
            <OrderHero>
              <img src={heroImg} alt='super herói' />
              <p>Ordernar por nome A/Z</p>
            </OrderHero>
          </HeroDiv>
        </StyledDiv>
        <Content>
          {
            allCharacters.map(character => {
              return (
                <Card  key={character.id}>
                  <Link to={`/characters/${character.id}`}>
                    <CardImg
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={character.name}
                    />
                  </Link>
                  <CardInfo>
                    <p>{character.name}</p>
                    <img src={emptyHeart} alt='favorito' />
                  </CardInfo>
                </Card>
              )
            })
          }
        </Content>
      </Grid>
    </Container>
  )
}

export default Home
