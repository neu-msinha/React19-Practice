import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./store/movies";
import { setType, getUsers } from "./store/users";

const App = () => {

  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);
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

      <hr/>

      <h3>UserType: {users.type}</h3>
      <button onClick={() => dispatch(setType("Admin"))}>
        Set User Type to Admin
      </button>
      
      <button onClick={() => dispatch(setType("Guest"))}>
        Set User Type to Guest
      </button>

      <hr/>

      <button onClick={() => dispatch(getUsers())}>
        Get Users
      </button>

    </>
  )
}

export default App
