import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCharacters,
  getCharacter,
  fetchCharactersByOrderName,
  fetchCharactersByOrderNameDesc
} from './actions'
import { addFavoriteCharacters, desfavorCharacters } from 'actions/favorite'
import logo from 'assets/logo.png'
import heroImg from 'assets/superhero.png'
import Container from 'components/container'
import InputStyled from 'components/input'
import Card from 'components/card'
import {
  LogoContainer,
  StyledDiv,
  StyledTitle,
  StyledSubTitle,
  HeroDiv,
  OrderHero,
  Content,
  Grid,
  OnlyCard,
  OrderButton
} from './styled'

const Home = () => {
  const [values, setValues] = useState({ hero: '' })
  const [likes, setLikes] = useState([])
  const [orderBy, setOrder] = useState(true)
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

  const handleOrderByName = () => {
    dispatch(fetchCharactersByOrderName())
    setOrder(false)
  }

  const handleOrderByNameDesc = () => {
    dispatch(fetchCharactersByOrderNameDesc())
    setOrder(true)
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
              {
                orderBy
                ? <OrderButton onClick={handleOrderByName}>Ordernar por nome A/Z</OrderButton>
                : <OrderButton onClick={handleOrderByNameDesc}>Ordernar por nome Z/A</OrderButton>
              }
            </OrderHero>
          </HeroDiv>
        </StyledDiv>
        <Content>
          {
            allCharacters.length > 1 ? allCharacters.map(character => {
              return (
                <Card
                  key={character.id}
                  character={character}
                  likes={likes}
                  allCharacters={allCharacters}
                  handleFavorite={handleFavorite}
                  handleDesfavor={handleDesfavor}
                />
              )
            }) : allCharacters.map(character => {
              return (
                <OnlyCard  key={character.id}>
                  <Card
                    character={character}
                    likes={likes}
                    allCharacters={allCharacters}
                    handleFavorite={handleFavorite}
                    handleDesfavor={handleDesfavor}
                  />
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
