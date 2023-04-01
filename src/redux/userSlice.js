import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type

const initialState = {
  AllEvents: [],
  MyEvents: [],
  userAddress: "",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllEvents: (state, action) => {
      state.AllEvents = action.payload;
    },
    setMyEvents: (state, action) => {
      state.MyEvents = action.payload;
    },
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
    },
  },
});

export const { setAllEvents, setUserAddress, setMyEvents } = userSlice.actions;

export default userSlice.reducer;
