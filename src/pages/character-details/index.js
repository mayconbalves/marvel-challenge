import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import API_URL from 'api'
import Container from 'components/container'
import Header from 'components/header'
import emptyHeart from 'assets/empty_heart.png'
import {
  Content,
  CharacterImg,
  Description,
  DescriptionName,
  DescriptionText,
  Grid
} from './styled'

const CharacterDetails = (props) => {
  const [character, setCharacter] = useState({})


  useEffect(() => {
    const getCharacterDetails = async () => {
      const response = await fetch(API_URL.CHARACTER_DETAILS(props?.match?.params?.id))
      response
        .json()
        .then(response => setCharacter(response.data.results[0]))
        .catch(error => error)
    }
    getCharacterDetails()
  }, [props?.match?.params?.id])

  return (
    <Container color='#e7f6e7'>
      <Grid>
        <Header />
        <Content>
          <Description>
            <DescriptionName>
              <h1>{character?.name?.substring(0, 12)}</h1>
              <img src={emptyHeart} alt='favoritar' />
            </DescriptionName>
            <div>
              {
                character?.description
                  ? <DescriptionText>{character?.description}</DescriptionText>
                  : <DescriptionText>No description</DescriptionText>
              }
            </div>
          </Description>
          <CharacterImg>
            <img
              src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              alt={character.name}
            />
          </CharacterImg>
        </Content>
      </Grid>
    </Container>
  )
}

export default withRouter(CharacterDetails)
