import fetch from 'node-fetch';
import apiUrl from './apiUrl'

// login
const login = (data) => {
    return fetch(apiUrl.login, {
        method: 'post',
        body:    JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
}

export default {
  login,
  //login,
  //dan lain-lain,
}


