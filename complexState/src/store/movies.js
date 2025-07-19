import { createSlice } from "@reduxjs/toolkit";


export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [
        {id: 1, title: 'The Matrix'},
        {id: 2, title: 'Fight Club'},
        {id: 3, title: 'The Lord of the Rings'},
        {id: 4, title: 'Inception'},
        {id: 5, title: 'Interstellar'}
    ]
  },
  reducers: {
    // Define your reducers here

    // creating an action here that will mutate the data like add or remove movie

    addMovie: (state, action) => {
        const newMovie = action.payload;
        state.list = [...state.list, newMovie];
    },

  }   
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;