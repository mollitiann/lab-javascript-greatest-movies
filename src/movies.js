// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const nameDirectors =  movies.map((item) => {
    return item.director;
})
return nameDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies){
    const newArray = movies.filter(movie => movie.genre.includes("Drama") && movie.director ==='Steven Spielberg');
    return newArray.length;
 }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals


  function ratesAverage(movies){
    const totalItems = movies.length;
    console.log(totalItems);
    const totalRate = movies.map(mRate => mRate.rate).filter(item => typeof item === 'number').reduce((totalRate, movie) => { return totalRate + movie; }, 0);
    //const totalRate = movies.reduce((totalRate, movie) => (totalRate + movie.rate) + 0);

    if (totalItems == 0 ){
         return 0;
    }
    return parseFloat((totalRate / totalItems).toFixed(2));
  } 

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    
    const totalItems = movies.length;
    const totalDramaRate = movies.reduce((totalDramaRate, movieDrama) => { return totalDramaRate + movieDrama.rate; } ,0);

    return  avgDramaRate = (parseFloat((totalDramaRate / totalItems).toFixed(2)));
}

// function dramaMoviesRate(movies){
//     const totalItems = movies.filter(filterDrama => filterDrama.genre.includes('Drama'));
//     const totalDramaRate = totalItems.reduce((totalDramaRate, movieDrama) => { return totalDramaRate + movieDrama.rate; });

//     return  avgDramaRate = (parseFloat((totalDramaRate / totalItems).toFixed(2)));
// }

// const dramaMoviesRate = arr => {
//     const filteredDramaArr = arr.filter(movie => movie.genre.includes('Drama'));
//     if (filteredDramaArr.length === 0) {
//       return 0;
//     }
//     return +((filteredDramaArr.reduce((totalRate, movie) => totalRate + movie.rate) / filteredDramaArr.length).toFixed(2));
//   }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
