import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: []
};

const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action) => {
      state.posts.push(action.payload);
    },
       remove: (state, action) => {
        console.log("removed")
      // expects id
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    edit: (state, action) => {
      console.log("edied")
      // expects {id, title, description}
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
  }
});

export const { add, remove, edit } = slice.actions;
export default slice.reducer;
