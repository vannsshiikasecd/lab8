
const fetchButton = document.getElementById('fetch-button');
const factText = document.getElementById('fact-text');


async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayFact(data.fact);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        factText.textContent = 'Failed to fetch a cat fact. Please try again.';
    }
}


function displayFact(fact) {
    factText.textContent = fact;
}


fetchButton.addEventListener('click', fetchCatFact);
