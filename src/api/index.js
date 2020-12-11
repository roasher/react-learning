class Api {
  constructor() {
    this.baseUrl = 'https://fakestoreapi.com';
  }

  doFetch(url, init) {
    const fetchUrl = `${this.baseUrl}${url}`;
    return fetch(fetchUrl, init).then(response => response.json());
  }

  get(url, data, config) {
    const params = new URLSearchParams(data).toString();
    const resultUrl = `${url}?${params}`;

    return this.doFetch(resultUrl, { method: 'GET', ...config });
  }

  getProduct(id) {
    return this.get(`/products/${id}`);
  }

  post(url, data, config) {
    this.doFetch(url, {
      method: 'POST',
      data,
      headers: config.headers,
      ...config,
    });
  }
}

export const api = new Api();
