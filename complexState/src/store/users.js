import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    type: 'Guest',
    users: []
  },
  reducers: {
    // Define your reducers here    

    setType: (state, action) => {
      state.type = action.payload;
    },

    // this will through an error on line 22 because you cannot do async operations directly in reducers
    // so we will use createAsyncThunk or createSlice with extraReducers
    // Error: Error fetching users: TypeError: Cannot perform 'set' on a proxy that has been revoked
    // at users.js:24:25

    getUsers: (state) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log("Fetched users:", response.data);
            state.users = response.data;
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        }
        );
    },

    addUser: (state, action) => {
      const newUser = action.payload;
      state.list = [...state.users, newUser];
    }
  }
});     

export const { setType, getUsers, addUser } = usersSlice.actions;
export default usersSlice.reducer;