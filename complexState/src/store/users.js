import { createSlice } from "@reduxjs/toolkit";

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

    addUser: (state, action) => {
      const newUser = action.payload;
      state.list = [...state.users, newUser];
    }
  }
});     

export const { setType, addUser } = usersSlice.actions;
export default usersSlice.reducer;