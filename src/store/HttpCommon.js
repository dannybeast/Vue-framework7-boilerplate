import axios from 'axios';

var baseURL = 'https://jsonplaceholder.typicode.com'

//  для авторизованных по токену
export const HTTP = axios.create({
  baseURL: baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  }
})

// для неавторизованных
export const HTTP_BASE = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})