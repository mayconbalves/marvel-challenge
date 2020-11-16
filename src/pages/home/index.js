import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from './actions'

const Home = () => {
  const dispatch = useDispatch()
  const allCharacters = useSelector(state => state.charactersReducer.characters) || []

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  return (
    <div>
      <h1>Explore o universo</h1>
      <p>
        Mergulhe no domínio deslumbrante de todos os
        personagens clássicos que você ama - e aquelas
        que você descobrirá em breve!
      </p>
      {
        allCharacters.map(character => {
          return (
            <div key={character.id}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
