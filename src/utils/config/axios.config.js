import axios from "axios";

// Default config for AXIOS

export const randomUserInstance = axios.create({
    baseURL: 'https://randomuser.me/api',
    responseType: 'json',
    timeout: 6000,
})

export const chuckJokeInstance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/random',
    timeout: 10000,
})