import md5 from 'js-md5'

const PRIVATE_KEY = '358a7f7e001f105f13dea1b03b938ff2e85f7d0d'
const PUBLIC_KEY = 'ed7a7b83b6e8f9f675216ce8cd676cc3'
const url = 'https://gateway.marvel.com/v1/public'

const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  baseUrl: url,
  CHARACTERS_LIST: `${url}/characters?ts=${timestamp}&orderBy=name&limit=20&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  CHARACTER_DETAILS: id =>
    `${url}/characters/${id}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
}
