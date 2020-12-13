import fetch from 'node-fetch';
import apiUrl from './apiUrl'

// Register
const register = (data) => {
    return fetch(apiUrl.register, {
        method: 'post',
        body:    JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
}

export default {
  register,
  //login,
  //dan lain-lain,
}


