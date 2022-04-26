import { createSlice } from '@reduxjs/toolkit';
import { ZoneModel } from './Zone.model';

const initialState = {
  data: [] as ZoneModel[],
  status: 'idle',
  error: null
}

const zoneSlice = createSlice({
  name: 'zones',
  initialState,
  reducers: {}
});

export default zoneSlice.reducer;

export const selectAllZones = (state: any) => state.zones.data;