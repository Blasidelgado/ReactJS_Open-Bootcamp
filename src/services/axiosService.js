import {randomUserInstance, chuckJokeInstance}from "../utils/config/axios.config";

export function getRandomUser() {
    return randomUserInstance.get('/') // https://randomuser.me/api/
}

export function getRandomJoke() {
    return chuckJokeInstance.get('/') // https://api.chucknorris.io/jokes/random
}

