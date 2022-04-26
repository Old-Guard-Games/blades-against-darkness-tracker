import React from 'react';
import './faction.scss';
import { useSelector } from 'react-redux';
import { FactionModel } from './Faction.model';

import { Faction } from './Faction.component';

export const FactionList = () => {
  const factions = useSelector((state: any) => state.factions.data);

  if (!factions || !factions.length) {
    return (<h1>No factions!</h1>);
  }

  const sorted = factions.slice().sort((a: FactionModel,b: FactionModel) => {
    const trimmedA = a.name.replace('The ','');
    const trimmedB = b.name.replace('The ','');
    if (trimmedA < trimmedB) {
      return -1;
    }
    return 1;
  })

  const renderedFactions = sorted.map((faction: FactionModel) => (<Faction key={faction.id} faction={faction} />));

  return (
    <div className='faction-list'>
      <h1>Factions</h1>
      {renderedFactions}
    </div>
  )
}