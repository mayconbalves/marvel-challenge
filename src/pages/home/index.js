import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCharacters, getCharacter } from './actions'
import { addFavoriteCharacters, desfavorCharacters } from 'actions/favorite'
import logo from 'assets/logo.png'
import heroImg from 'assets/superhero.png'
import emptyHeart from 'assets/empty_heart.png'
import heart from 'assets/heart.png'
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
  const [likes, setLikes] = useState([])
  const dispatch = useDispatch()
  const allCharacters = useSelector(state => state.charactersReducer.characters) || []

  const getFavorite = async () => {
    const data = await fetch('http://localhost:8080/favorite/list')
      data
        .json()
        .then(data => setLikes(data))
        .catch(e => e)
  }

  useEffect(() => {
    dispatch(fetchCharacters())
    getFavorite()
  }, [dispatch])

  const inputChange = e => {
    const { value, name } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleFavorite = (id, like) => {
    dispatch(addFavoriteCharacters(id, like))
    getFavorite()
  }

  const handleDesfavor = (id, like) => {
    dispatch(desfavorCharacters(id, like))
    getFavorite()
  }

  const handleKeyDown = async (e) => {
    const { name, value } = e.target

    if (e.key === 'Enter') {
      setValues({ ...values, [name]: value })
      dispatch(getCharacter(values.hero))
      setValues({ hero: '' })
    }
  }

  const hasId = likes.map(item => item.id)
  const isFavorite = likes.map(item => item.like)
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
              const filtered = likes.filter(like => like.id === character.id)
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
                    {
                      !hasId.includes(character.id) &&
                      isFavorite.includes(true)
                      ? <img
                          src={emptyHeart}
                          alt='favorito'
                          onClick={() => handleFavorite(filtered.id, true)}
                        />
                      : <img
                          src={heart}
                          alt='favorito'
                          onClick={() => handleDesfavor(filtered.id, false)}
                        />
                    }
                  </CardInfo>
                </Card>
              )
            }) : allCharacters.map(character => {
              const filtered = likes.filter(like => like.id === character.id)
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
                    {
                      !hasId.includes(character.id)
                      ? <img
                          src={emptyHeart}
                          alt='favorito'
                          onClick={() => handleFavorite(filtered.id, true)}
                        />
                      : <img
                          src={heart}
                          alt='favorito'
                          onClick={() => handleDesfavor(filtered.id, false)}
                        />
                    }
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
