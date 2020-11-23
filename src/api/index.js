import md5 from 'js-md5'

// 358a7f7e001f105f13dea1b03b938ff2e85f7d0d
const PRIVATE_KEY = '4c0daa16592af958154ea22e7da2a45e2234fe91'
// ed7a7b83b6e8f9f675216ce8cd676cc3
const PUBLIC_KEY = '54d1176fe5c0c866b5c2aae2886cf59f'
const url = 'https://gateway.marvel.com/v1/public'
const favoriteUrl = 'http://localhost:8080/favorite'

const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  baseUrl: url,
  CHARACTERS_LIST: `${url}/characters?ts=${timestamp}&orderBy=modified&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  CHARACTER_DETAILS: id =>
    `${url}/characters/${id}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  CHARACTER_COMICS: id =>
    `${url}/characters/${id}/comics?ts=${timestamp}&orderBy=onsaleDate&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  GET_ONLY_CHARACTER: name =>
    `${url}/characters?name=${name}&ts=${timestamp}&orderBy=modified&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  GET_ALL_FAVORITE: `${favoriteUrl}/list`,
  ADD_FAVORITE: `${favoriteUrl}/create`,
  DELETE_FAVORITE: id => `${favoriteUrl}/${id}/delete`,
  CHARACTERS_LIST_BY_ORDER_NAME: `${url}/characters?ts=${timestamp}&orderBy=name&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  CHARACTERS_LIST_BY_ORDER_NAME_DESC: `${url}/characters?ts=${timestamp}&orderBy=-name&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
}
