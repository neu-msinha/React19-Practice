import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async(thunkAPI) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.data);
        return res;
    }
)

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

    // getUsers: (state) => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //         console.log("Fetched users:", response.data);
    //         state.users = response.data;
    //     })
    //     .catch(error => {
    //         console.error("Error fetching users:", error);
    //     }
    //     );
    // },

    addUser: (state, action) => {
      const newUser = action.payload;
      state.list = [...state.users, newUser];
    }
  },

  extraReducers: (builder) => {
        builder 
        .addCase(fetchUsers.pending, (state) => {
            console.log('Pending Request')
        })
        .addCase(fetchUsers.fulfilled, (state, action)=> {
            console.log('fulfilled');
            console.log(action.payload)
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action)=> {
            console.log("rejected");
            console.log("Error: ", action.error);
        })
  }
});     

export const { setType, getUsers, addUser } = usersSlice.actions;
export default usersSlice.reducer;





//   extraReducers: (builder) => {
//     builder
//       .addCase(getUsers.fulfilled, (state, action) => {
//         state.users = action.payload;
//       })
//       .addCase(getUsers.rejected, (state, action) => {
//         console.error("Error fetching users:", action.error);
//       });
//   }