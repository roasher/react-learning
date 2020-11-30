class Api {
  _baseUrl = 'https://fakestoreapi.com'

  _doFetch(url, init) {
    const fetchUrl = `${this._baseUrl}${url}`
    return fetch(fetchUrl, init).then(response => response.json());
  }

  get = (url, data, config) => {
    const params = new URLSearchParams(data).toString();
    const resultUrl = `${url}?${params}`

    return this._doFetch(resultUrl, {method: "GET", ...config})
  }

  getProduct = (id) => {
    return this.get(`/products/${id}`);
  }

  post = (url, data, config) => {
    this._doFetch(url, {
      method: "POST",
      data,
      headers: config.headers,
      ...config
    })
  }
}

export const api = new Api();