// store.js
import { configureStore } from '@reduxjs/toolkit'
import slice from "./slice"

export const store = configureStore({
  reducer: {
    Slice: slice,
  }
})

export default store
