function solve() {
    let movieNameElement = document.querySelector('input[placeholder="Name"]');
    let movieHallElement = document.querySelector('input[placeholder="Hall"]');
    let moviePriceElement = document.querySelector('input[placeholder="Ticket Price"]');
    let buttonOnScreen = document.querySelector('#container button');

    buttonOnScreen.addEventListener('click', () => {
        if(movieHallElement.value && movieNameElement.value && moviePriceElement.value) {

        }
    });

}