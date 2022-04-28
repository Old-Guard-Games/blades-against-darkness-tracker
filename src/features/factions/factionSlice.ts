import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../app/store';
import { FactionModel } from './Faction.model';
import initialFactions from './initialData';

export type FactionState = {
  data: FactionModel[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: FactionState = {
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

export const selectAllFactions = (state: AppState) => state.factions.data