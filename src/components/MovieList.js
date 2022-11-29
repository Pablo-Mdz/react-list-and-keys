// 6
import { useState } from 'react';
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

function MovieList() {
    const [movies, setMovies] = useState(moviesData);

    const deleteMovie = (movieId) => {
        const filteredMovies = movies.filter((movie) => {
            return movie._id !== movieId;
        });

        setMovies(filteredMovies);
    };


    return (
        <div>
            <h2>Movie List</h2>
            {movies.map((movie) => {
                return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />
            })}
        </div>
    )
}


export default MovieList;


// // 5
// import { useState } from 'react';

// // Array of movies
// import moviesData from '../movies-data.json';

// function MovieList() {
//   // Declare a state variable "movies"
//   // and set the array from movies-data.json as the initial state
//   const [movies, setMovies] = useState(moviesData);

//   const deleteMovie = (movieId) => {
//     const filteredMovies = movies.filter((movie) => {
//       return movie._id !== movieId;
//     });

//     setMovies(filteredMovies);
//   };

//   return (
//     <div>
//       <h2>Movie List</h2>
//       {movies.map((movie) => {
//         return (
//           <div className="MovieCard">
//             <h3>{movie.title}</h3>
//             <p>Director: {movie.director}</p>
//             <p>Rating: {movie.IMDBRating}</p>
//             <button onClick={() => deleteMovie(movie._id)} className="btn-delete">
//               Delete 🗑
//             </button>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default MovieList;


// render movies add example
// function MoviesList(props) {
//     return (
//         props.movies.map(movie => (
//             <div key={movie._id}>
//                 <h3>{movie.title}</h3>
//                 <h5>Directed by: {movie.director}</h5>

//                 {/* If IMBD Rating is higher than 9 display "Recommended!" */}
//                    {movie.IMDBRating > 9 && <h5>"Recommended! 😻"</h5>}

               // { If movie has oscars display "Oscar Winner!" else display "No Oscar"  }
                // {movie.hasOscars ? <h5>Oscar Winner</h5> : <h5>No Oscar</h5>}
//             </div>
//         ))
//     )
// }

// export default MoviesList