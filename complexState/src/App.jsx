import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./store/movies";

const App = () => {

  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

  console.log(movies);

  return (
    <>
      <h1>Movie List</h1>
      <ul>
        {movies.length === 0 ? (
          <li>No movies available</li>
        ) : (
          movies.map((movie, index) => (
            <li key={index}>
              {movie.title}
              &nbsp;  
            </li>
          ))
        )}
      </ul>

      <button onClick={() => dispatch(addMovie({id: movies.length + 1, title: `New Movie ${movies.length + 1}`}))}>
        Add Movie
      </button>
      <p>Click the button to add a new movie.</p>
    </>
  )
}

export default App
