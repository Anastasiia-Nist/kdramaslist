import { URL_BASE } from './constants';

const data = {
  baseUrl: URL_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
};

class MainApi {
  constructor(dataApi) {
    this._baseUrl = dataApi.baseUrl;
    this._headers = dataApi.headers;
  }

  //
  _request(endpoint, options) {
    return fetch(`${this._baseUrl}/${endpoint}`, options).then(
      this._checkResult
    );
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getTopDramas() {
    return this._request('dramas/top', {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }
  getSavedDramas() {
    return this._request('dramas/saved', {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }
  addDrama({ userId, name, img, country, year, description, duration }) {
    console.log({ userId, name, img, country, year, description, duration })
    return this._request('dramas/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        userId: userId || 1,
        name,
        img,
        country,
        year,
        description,
        duration,
      }),
    });
  }
}

const mainApi = new MainApi(data);
export default mainApi;
