import React from 'react'
import { Link } from 'react-router-dom'
import { object, array, func } from 'prop-types'
import emptyHeart from 'assets/empty_heart.png'
import heart from 'assets/heart.png'
import { Container, CardImg, CardInfo, HeartImg } from './styled'

const Card = ({ character, likes, handleFavorite, handleDesfavor }) => {
  const hasId = likes.map(item => item.id)
  const filtered = likes.filter(like => like.id === character.id)
  return (
    <Container  key={character.id}>
      <Link to={`/characters/${character.id}`}>
        <CardImg
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
          alt={character.name}
        />
      </Link>
      <CardInfo>
        <p>{character.name}</p>
        {
          !hasId.includes(character.id)
          ? <HeartImg
              src={emptyHeart}
              alt='favoritar'
              data-testid='favoritar'
              onClick={() => handleFavorite(filtered.id, true)}
            />
          : <HeartImg
              src={heart}
              alt='desfavoritar'
              onClick={() => handleDesfavor(filtered.id, false)}
            />
        }
      </CardInfo>
    </Container>
  )
}

Card.propTypes = {
  character: object.isRequired,
  likes: array,
  handleFavorite: func,
  handleDesfavor: func
}

export default Card
