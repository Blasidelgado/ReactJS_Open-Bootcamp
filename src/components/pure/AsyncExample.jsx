import React from 'react'

const AsyncExample = () => {

    async function generateNumber(){
        return 1 // 
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    function obtainNumber(){
        generateNumber()
        .then((response) => alert(`response: ${response}`))
        .catch((error) => alert(`Something went error ${error}`))
    }

    function obtainPromiseNumber(){
        generatePromiseNumber()
        .then((response) => alert(`response: ${response}`))
        .catch((error) => alert(`Something went error ${error}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage(){
        saveSessionStorage('name', 'Martin')
            .then((response) => {
                let value = response
                alert(`Saved name:${value}`)
            }).catch((error) => {
                alert(`Something went wrong: ${error}`)
            }).finally(() => {
                alert('SUCESS: Name saved and retrieved')
            })
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000)
        })

        let message = await promise

        await alert(`Message received: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Ooooops!'))
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is OK: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('FInally executed'))
    }

    const urlNotFound = async() => {
        try {
            let response= await fetch('https://invalidURL.com')
            alert(`Response ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${error}. (check your console)`)
        }
    }

    const multiplePromise = async() => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2'),
            ]
        ).catch((error) => alert(`Something went wrong with your URLs: ${error} (check your console)`))
    }

    return (
        <div>
            <h1>Async, Promise Examples</h1>
            <button onClick={obtainNumber}>obtain Number</button>
            <button onClick={obtainPromiseNumber}>obtain Number</button>
            <button onClick={showStorage}>Save name and show</button>
            <button onClick={obtainMessage}>Recieve message in 2 seconds</button>
            <button onClick={consumeError}>ObtainError</button>
            <button onClick={urlNotFound}>Request to unknown URL</button>
            <button onClick={multiplePromise}>Multiple Promises</button>
        </div>
    )
}

export default AsyncExample