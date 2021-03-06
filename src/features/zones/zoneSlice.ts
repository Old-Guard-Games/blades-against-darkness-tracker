import { createSlice } from '@reduxjs/toolkit';
import { ZoneModel } from './Zone.model';
import initialZones from './initialData';
import { AppState } from '../../app/store';

export type ZoneState = {
  data: ZoneModel[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: ZoneState = {
  data: initialZones,
  status: 'idle',
  error: null
}


const zoneSlice = createSlice({
  name: 'zones',
  initialState,
  reducers: {}
});

export default zoneSlice.reducer;

export const selectAllZones = (state: AppState) => state.zones.data.slice()
  .sort((a: ZoneModel,b: ZoneModel) => {
    const trimmedA = a.name.replace('The ','');
    const trimmedB = b.name.replace('The ','');
    if (trimmedA < trimmedB) {
      return -1;
    }
    return 1;
  });
