export default class Request {

  static async get(url) {
    return fetch(url)
      .then(raw => raw.json())
      .then(res => res)
  }
}
