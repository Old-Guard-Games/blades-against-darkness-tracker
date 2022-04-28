import { configureStore } from '@reduxjs/toolkit'

import factionsReducer, { FactionState } from '../features/factions/factionSlice';
import zonesReducer, { ZoneState } from '../features/zones/zoneSlice';

export type AppState = {
  factions: FactionState,
  zones: ZoneState
}

export default configureStore({
  reducer: {
    factions: factionsReducer,
    zones: zonesReducer,
  }
})
