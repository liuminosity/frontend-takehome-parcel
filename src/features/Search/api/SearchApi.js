import request from '../../../lib/request';

export default class SearchApi {
  static SERVER_URL = 'http://localhost:3000'
  static BASE_URL = '/api/v1/search.json'

  static get({ query = ''}) {
    return request.get(`${SearchApi.SERVER_URL}${SearchApi.BASE_URL}?query=${query}`)
  }
}
