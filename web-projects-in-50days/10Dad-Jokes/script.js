const joke_btn = document.querySelectorAll('.joke-btn')[0]
const joke = document.querySelectorAll('.joke')[0]

joke_btn.addEventListener('click', generateJoke)

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'Application/json',
        }
    }
    const response = await fetch("https://icanhazdadjoke.com", {headers: {Accept: 'Application/json'}})
    let data = await response.json()
    joke.innerHTML=data.joke
}