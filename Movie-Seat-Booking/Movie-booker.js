const container = document.querySelector('.container');
// get seats, get seats in class row that are not occupied
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
console.log(ticketPrice)

populateUI();
// arrow function to update the count of seats 
updateSelectedSeats = () => {
     const selectedSeats = document.querySelectorAll('.row .seat.selected')

     const seatIndex = [...selectedSeats].map (seat => [...seats].indexOf(seat));

     // save seats to local storage
     localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
 

     count.innerText = selectedSeats.length;
     total.innerText = selectedSeats.length * ticketPrice;
}

// save movie selection to local storage
setMovie = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);

    // console.log("hah")
    
    // console.log(localStorage.getItem('selectedMovieIndex'))
    // console.log(localStorage.getItem('selectedMoviePrice'))
}

/// get data from local storage
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    
    if (selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

    console.log(localStorage.getItem('selectedMovieIndex'))
    console.log(localStorage.getItem('selectedMoviePrice'))

    ticketPrice = +localStorage.getItem('selectedMoviePrice')

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }

}

// movie selector


movieSelect.addEventListener('change', e => {
    // ticketPrice = +localStorage.getItem('selectedMoviePrice')
    ticketPrice = +e.target.value
 
    setMovie(e.target.selectedIndex, e.target.value);
    updateSelectedSeats();
});



// on click of a seat, toggle the class of the seat to selected or deselected if the seat is not occupied
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedSeats();
    }
});

// initial count and total 
updateSelectedSeats();