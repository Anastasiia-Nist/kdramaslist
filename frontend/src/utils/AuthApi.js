import { URL_BASE } from './constants';

const data = {
  baseUrl: URL_BASE,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

class AuthApi {
  constructor(dataApi) {
    this._baseUrl = dataApi.baseUrl;
    this._headers = dataApi.headers;
  }

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
  register({ name, email, password }) {
    return this._request('signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
  }
  authorize(email, password) {
    return this._request('signin', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }
  getUserInfo() {
    return this._request('users/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }
}
const authApi = new AuthApi(data);
export default authApi;
