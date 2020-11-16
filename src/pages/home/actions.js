import API_URL from 'api'
export const CHARACTERS_LIST_SUCCESS = 'CHARACTERS_LIST_SUCCESS'
export const CHARACTERS_LIST_ERROR = 'CHARACTERS_LIST_ERROR'

const fetchCharactersSuccess = data => {
	return {
		type: CHARACTERS_LIST_SUCCESS,
		payload: data
	}
}

const fetchCharactersError = error => {
	return {
		type: CHARACTERS_LIST_ERROR,
		payload: error
	}
}

export const fetchCharacters = () => async dispatch => {
	const response = await fetch(API_URL.CHARACTERS_LIST)
    response
      .json()
      .then(response => dispatch(fetchCharactersSuccess(response.data)))
      .catch(error => dispatch(fetchCharactersError(error)))
}
