import API_URL from 'api'
export const GET_CHARACTERS_SUCCESS = 'CHARACTERS_LIST_SUCCESS'
export const GET_CHARACTERS_ERROR = 'CHARACTERS_LIST_ERROR'
export const CHARACTERS_LIST_SUCCESS = 'CHARACTERS_LIST_SUCCESS'
export const CHARACTERS_LIST_ERROR = 'CHARACTERS_LIST_ERROR'

const fetchCharactersSuccess = data => ({
	type: CHARACTERS_LIST_SUCCESS,
	payload: data
})

const fetchCharactersError = error => ({
	type: CHARACTERS_LIST_ERROR,
	payload: error
})

export const fetchCharacters = () => async dispatch => {
	const response = await fetch(API_URL.CHARACTERS_LIST)
    response
      .json()
      .then(response => dispatch(fetchCharactersSuccess(response.data)))
      .catch(error => dispatch(fetchCharactersError(error)))
}

const getCharacterSuccess = data => ({
	type: GET_CHARACTERS_SUCCESS,
	payload: data
})

const getCharacterError = error => ({
	type: GET_CHARACTERS_ERROR,
	payload: error
})

export const getCharacter = (name) => async dispatch => {
	const response = await fetch(API_URL.GET_ONLY_CHARACTER(name))
    response
      .json()
      .then(response => dispatch(getCharacterSuccess(response.data)))
      .catch(error => dispatch(getCharacterError(error)))
}
