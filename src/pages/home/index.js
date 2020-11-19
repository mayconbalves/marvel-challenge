import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCharacters, getCharacter } from './actions'
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
  Grid,
  OnlyCard
} from './styled'

const Home = () => {
  const [values, setValues] = useState({ hero: '' })
  const dispatch = useDispatch()
  const allCharacters = useSelector(state => state.charactersReducer.characters) || []

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  const inputChange = e => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleKeyDown = async (e) => {
    const { name, value } = e.target

    if (e.key === 'Enter') {
      setValues({ ...values, [name]: value })
      dispatch(getCharacter(values.hero))
      setValues({ hero: '' })
    }
  }

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
            <InputStyled
              placeholder='Procure por heróis'
              name='hero'
              type='text'
              value={values.hero}
              onChange={inputChange}
              onKeyDown={handleKeyDown}
            />
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
            allCharacters.length > 1 ? allCharacters.map(character => {
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
            }) : allCharacters.map(character => {
              return (
                <OnlyCard  key={character.id}>
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
                </OnlyCard>
              )
            })
          }
        </Content>
      </Grid>
    </Container>
  )
}

export default Home
