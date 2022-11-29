import "./App.css";
import List from "./components/List";
import StudentList from "./components/StudentList";
import ProjectList from "./components/ProjectList";
import MovieList from "./components/MovieList";


function App() {
  return (
    <div className="App">
      {/* <List /> */}
      {/* <StudentList /> */}
      {/* <ProjectList /> */}
      <MovieList />
    </div>
  );
}

export default App;

<div className='App'/>
{tweetsArray.map(tweet => (
    <Tweet tweet={tweet}/>
))}

// const [movies, setMovies] = useState(moviesData)

//   function addMovie() {
//     const newMovie = {
//       _id: "1ae23ef7",
//       title: "Interstellar",
//       director: "Christopher Nolan",
//       hasOscars: true,
//       IMDBRating: 8.6
//     }

//     setMovies([newMovie, ...movies])


// return 
// add movie
// <div className="App">
// <section>
//   {movies.map(movie => (
//     <div key={movie._id}>
//       <h3>{movie.title}</h3>
//       <h5>{movie.director}</h5>
//     </div>
//   ))
//   }

//   <button onClick={addMovie}>Add a movie</button>
// </section>

// <section>
  
// </section>
// </div>
    // const moviesCopy = movies.slice()
    // moviesCopy.push(newMovie)