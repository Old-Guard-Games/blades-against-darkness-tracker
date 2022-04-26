import { configureStore } from '@reduxjs/toolkit'

import factionsReducer from '../features/factions/factionSlice';

export default configureStore({
  reducer: {
    factions: factionsReducer,
  }
})
