import { useSelector } from "react-redux"

const App = () => {

  const movies = useSelector((state) => state.movies.list);

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
    </>
  )
}

export default App
