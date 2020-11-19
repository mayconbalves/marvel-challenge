import {
	GET_CHARACTERS_SUCCESS,
	GET_CHARACTERS_ERROR,
	CHARACTERS_LIST_SUCCESS,
	CHARACTERS_LIST_ERROR,
} from './actions'

const initialState = {
  characters: [],
  error: null
}

export default function character (state = initialState, action) {
	switch(action.type) {
	case GET_CHARACTERS_SUCCESS:
	case CHARACTERS_LIST_SUCCESS:
		return {
			...state,
			characters: action.payload.results,
			error: null
		}
	case CHARACTERS_LIST_ERROR:
	case GET_CHARACTERS_ERROR:
		return {
			characters: [],
			error: action.payload
		}
	default:
		return state
	}
}
