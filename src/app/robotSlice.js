import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const requestRobots = createAsyncThunk("robots/requestRobots", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

const initialStateRobots = {
  robots: [],
  isPending: false,
};

const robotSlice = createSlice({
  name: "robots",
  initialState: initialStateRobots,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(requestRobots.pending, (state) => {
        state.isPending = true;
      })
      .addCase(requestRobots.fulfilled, (state, action) => {
        state.robots = action.payload;
        state.isPending = false;
      })
      .addCase(requestRobots.rejected, (state, action) => {
        state.error = action.payload;
        state.isPending = false;
      });
  },
});

export default robotSlice.reducer;
