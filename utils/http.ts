export default {
  get: (url:string) => {
    return fetch(url)
      .then(response=>response.json())
      .then(result => {
        return result
      })
  }
}