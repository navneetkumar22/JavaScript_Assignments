// Grabbing Web Elements
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Adding event listener to button

jokeBtn.addEventListener('click', generateJoke);



// Declaring event function to fetch new joke everytime

async function generateJoke() {
    // Calling the icanhaz API
    const jokesResult = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const joke = await jokesResult.json();

    // Set the new joke
    jokeEl.innerHTML = joke.joke;
}
