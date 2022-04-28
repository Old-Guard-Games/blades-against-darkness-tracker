import React from 'react';
import { Gauge } from '../../components/Gauge';
// import { useSelector } from 'react-redux';
import { FactionModel, DowntimeActivity } from './Faction.model';

import bandage from '../../img/bandage-roll(1).svg';
import beer from '../../img/beer-stein(1).svg';
import hourglass from '../../img/sands-of-time.svg';
import bag from '../../img/swap-bag(1).svg';
import torch from '../../img/torch(1).svg';

const icons = { bandage, beer, hourglass, bag, torch }

const DowntimeList = ({activities}: {activities: DowntimeActivity[]}) => {
  const renderedactivities = activities.map(activity => {
    const {name, icon, description, available, plusOne, minusOne} = activity;
    return available ? (
      <div className='downtime-activity'>
        <h4><img alt={`${icon} icon`} src={icons[icon]} /> {name}</h4>
        <p className='indented'>{description}</p>
        {plusOne ? (<p className='indented'><strong>+1d:</strong> {plusOne}</p>) : '' }
        {minusOne ? (<p className='indented'><strong>-1d:</strong> {minusOne}</p>) : '' }
      </div>
    ) : '';
  })
  return (<div className='downtime-list'>
      <h3>Downtime</h3>
      <section>
        {renderedactivities}
      </section>
  </div>
  )
}

export const Faction = ({faction}: {faction: FactionModel}) => {
  const {name, tier, description, npcs, assets, allies, enemies, coffers, relationship, downtime, goals} = faction;


  return (
    <section className='faction'>
      <h2>{name} (Tier {tier})</h2>
      <section>
        <div className="column">
          <p><strong>Relationship:</strong> {relationship > 0 ? '+' + relationship : relationship}</p>
          <p>{description}</p>
          <p>
            <strong>Coffers:</strong>
            <Gauge max={10} current={coffers} width={12} endcaps={true}
              pretext='Tier -1 and reset Coffers to 5'
              posttext='Tier +1 and reset Coffers to 5' />
          </p>
        </div>
        <div className="column">
          <p><strong>Notable NPCs:</strong></p>
          <ul>
            {npcs.map((n,i) => (<li key={i}>{n}</li>))}
          </ul>
          <p><strong>Assets:</strong> {assets}</p>
          <p>
            <strong>Allies: </strong>
            {allies?.length ? allies.join(', ') : 'None'}
          </p>
          <p>
            <strong>Enemies: </strong>
            {enemies?.length ? enemies.join(', ') : 'None'}
          </p>
        </div>

      </section>
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
  //       segments: 8,;
  //       progress: 0,
  //       nextStep: ''
  //     },
  //     {
  //       segments: 8,
  //       progress: 0,
  //       nextStep: ''
  //     }
  //   ]
  // 
 
}

export const FactionMenuItem = ({faction}: {faction: FactionModel}) => {
  const rel = faction.relationship > 0 ? '+' + faction.relationship : faction.relationship;
  const iconList = faction.downtime
    .filter((activity) => activity.available)
    .map((activity, index) => (
      <img key={index} alt={`${activity.icon} icon`} src={icons[activity.icon]} style={{width: '1.5em'}}/>
    ));
  return (
  <div className='faction-menu'>
    <p className='name'>{faction.name} (T{faction.tier})</p>
    <p className="subtext"><strong>Relationship:</strong> {rel}</p>
    <p className='subtext'><strong className='title'>Coffers:</strong> <Gauge width={5} max={10} current={faction.coffers} /></p>
    <p className="subtext">{iconList}</p>
  </div>
)}