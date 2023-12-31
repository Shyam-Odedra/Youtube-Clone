import { configureStore } from '@reduxjs/toolkit'
import youtubeReducer from './features/youtubeSlice';

export const store = configureStore({
  reducer: {
    youtube: youtubeReducer
  },
})