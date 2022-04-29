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

export const selectAllFactions = (state: AppState) => {
  const data = state.factions.data.slice();
  const sorted = data.sort((a: FactionModel,b: FactionModel) => {
    const trimmedA = a.name.replace('The ','');
    const trimmedB = b.name.replace('The ','');
    if (trimmedA < trimmedB) {
      return -1;
    }
    return 1;
  });

  console.log(sorted);
  return sorted;
};
