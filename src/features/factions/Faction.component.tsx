import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { FactionModel, DowntimeActivity } from './Faction.model';

const DowntimeList = ({activities}: {activities: DowntimeActivity[]}) => {
  const [expanded, setExpanded] = useState(false);

  const onClick = () => {
    setExpanded(!expanded);
  }

  if (!expanded) {
    return (<div className='downtime-list'>
      <h3 onClick={onClick}>&#9654; Available Downtime Activities</h3>
    </div>);
  }

  const renderedactivities = activities.map(activity => {
    const {name, description, available, plusOne, minusOne} = activity;
    return available ? (
      <div className='downtime-activity'>
        <h4>{name}</h4>
        <p className='indented'>{description}</p>
        {plusOne ? (<p className='indented'><strong>+1d:</strong> {plusOne}</p>) : '' }
        {minusOne ? (<p className='indented'><strong>-1d:</strong> {minusOne}</p>) : '' }
      </div>
    ) : '';
  })
  return (<div className='downtime-list'>
      <h3 onClick={onClick}>&#9660; Available Downtime Activities</h3>
      {renderedactivities}
  </div>
  )
}

export const Faction = ({faction}: {faction: FactionModel}) => {
  const {name, tier, description, npcs, assets, allies, enemies, coffers, relationship, downtime, goals} = faction;

  const [expanded, setExpanded] = useState(false);
  const onClick = () => {
    setExpanded(!expanded);
  }

  if (!expanded) {
    return (
      <section className='faction'>
        <h2 onClick={onClick}>&#9654; {name} (Tier {tier})</h2>
      </section>
    )
  }

  return (
    <section className='faction'>
      <h2 onClick={onClick}>&#9660; {name} (Tier {tier})</h2>
      <p><strong>Relationship:</strong> {relationship}</p>
      <p>{description}</p>
      <p><strong>Notable NPCs:</strong></p>
      <ul>
        {npcs.map((n,i) => (<li key={i}>{n}</li>))}
      </ul>
      <p><strong>Assets:</strong> {assets}</p>
      <p><strong>Allies:</strong></p>
      <ul>
        {allies.map((n,i) => (<li key={i}>{n}</li>))}
      </ul>
      <p><strong>Enemies:</strong></p>
      <ul>
        {enemies.map((n,i) => (<li key={i}>{n}</li>))}
      </ul>
      <p><strong>Coffers:</strong> {coffers}</p>
      <DowntimeList activities={downtime} />

    </section>
  )
  // goals: {
  //   longTerm: '',
  //   intermediate: [
  //     {
  //       segments: 8,
  //       progress: 0,
  //       nextStep: ''
  //     },
  //     {
  //       segments: 8,
  //       progress: 0,
  //       nextStep: ''
  //     },
  //     {
  //       segments: 8,
  //       progress: 0,
  //       nextStep: ''
  //     },
  //     {
  //       segments: 8,
  //       progress: 0,
  //       nextStep: ''
  //     }
  //   ]
  // }
 
}