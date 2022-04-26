import { createSlice } from '@reduxjs/toolkit';
import { FactionModel } from './Faction.model';
import initialFactions from './initialData';

const initialState = {
  data: initialFactions as FactionModel[],
  status: 'idle',
  error: null
};

const factionsSlice = createSlice({
  name: 'factions',
    initialState,
    reducers: {}
});

export default factionsSlice.reducer;

export const selectAllFactions = (state: any) => state.factions.data