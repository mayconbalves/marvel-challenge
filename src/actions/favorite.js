import API_URL from 'api'
import axios from 'axios'
export const ADD_CHARACTERS_FAVORITE = 'ADD_CHARACTERS_FAVORITE'
export const ADD_CHARACTERS_FAVORITE_ERROR = 'ADD_CHARACTERS_FAVORITE_ERROR'

const addFavoriteCharactersSuccess = data => ({
	type: ADD_CHARACTERS_FAVORITE,
	payload: data
})

const addFavoriteCharactersError = error => ({
	type: ADD_CHARACTERS_FAVORITE_ERROR,
	payload: error
})

export const addFavoriteCharacters = (id, like) => async dispatch => {
	await axios.post(API_URL.ADD_FAVORITE, {
		id, like
	})
    .then(response => dispatch(addFavoriteCharactersSuccess(response.data)))
    .catch(error => dispatch(addFavoriteCharactersError(error)))
}

export const desfavorCharacters = (id, like) => async dispatch => {
	await axios.put(API_URL.UPDATE_FAVORITE(id), {
		like
	})
    .then(response => dispatch(addFavoriteCharactersSuccess(response.data)))
    .catch(error => dispatch(addFavoriteCharactersError(error)))
}
