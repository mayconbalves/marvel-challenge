import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import API_URL from 'api'
import Container from 'components/container'
import Header from 'components/header'
import emptyHeart from 'assets/empty_heart.png'
import notFound from 'assets/not-found.png'
import {
  Content,
  CharacterImg,
  Description,
  DescriptionName,
  DescriptionText,
  Grid,
  AllComics,
  ComicsContainer
} from './styled'

const CharacterDetails = (props) => {
  const [character, setCharacter] = useState({})
  const [allComics, setComics] = useState([])


  useEffect(() => {
    const getCharacterDetails = async () => {
      const response = await fetch(API_URL.CHARACTER_DETAILS(props?.match?.params?.id))
      response
        .json()
        .then(response => setCharacter(response.data.results[0]))
        .catch(error => error)

      if (response) {
        const comics = await fetch(API_URL.CHARACTER_COMICS(props?.match?.params?.id))
        comics
          .json()
          .then(comics => setComics(comics?.data?.results))
          .catch(error => error)
      }
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
            <>
              {
                character?.description
                  ? <DescriptionText>{character?.description}</DescriptionText>
                  : <DescriptionText>No description</DescriptionText>
              }
            </>
          </Description>
          <CharacterImg>
            <img
              src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              alt={character.name}
            />
          </CharacterImg>
        </Content>
        <div>
          <h1>Últimos lançamentos</h1>
          <AllComics>
            {
              allComics.length > 0 ? allComics.map(comic => {
                return (
                  <ComicsContainer key={comic.id}>
                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt={comic.description}
                    />
                    <h5>{comic.title}</h5>
                  </ComicsContainer>
                )
              })
              : <ComicsContainer>
                  <h2>Not found comics:</h2>
                  <img src={notFound} alt='marvel'/>
                </ComicsContainer>
            }
          </AllComics>
        </div>
      </Grid>
    </Container>
  )
}

export default withRouter(CharacterDetails)
