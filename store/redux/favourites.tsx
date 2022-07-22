import {createSlice} from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
  name: 'favourites',
  initialState: {
    meal_ids: [] as string[]
  },
  reducers: {
    addFavourite: (state, action) => {
      state.meal_ids.push(action.payload.mealId);
    },
    removeFavourite: (state,action) => {
      state.meal_ids.splice(state.meal_ids.indexOf(action.payload.mealId), 1);
    },
  },
});

export const addFavourite = favouriteSlice.actions.addFavourite;
export const removeFavourite = favouriteSlice.actions.removeFavourite;
export default favouriteSlice.reducer;