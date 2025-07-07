import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: []
};

const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action) => {
      state.posts.push({ ...action.payload, fav: false });
    },
    remove: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    edit: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        // Only update the fields, keep fav and id
        state.posts[index] = {
          ...state.posts[index],
          ...action.payload,
          id: state.posts[index].id,
          fav: state.posts[index].fav
        };
      }
    },
    toggleFav: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload);
      if (index !== -1) {
        state.posts[index].fav = !state.posts[index].fav;
      }
    },
  }
});

export const { add, remove, edit, toggleFav } = slice.actions;
export default slice.reducer;
