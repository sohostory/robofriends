import { createSlice } from "@reduxjs/toolkit";

const initialStateSearch = {
  searchField: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialStateSearch,
  reducers: {
    setSearchField(state, action) {
      state.searchField = action.payload;
    },
  },
});

export const { setSearchField } = searchSlice.actions;
export default searchSlice.reducer;
