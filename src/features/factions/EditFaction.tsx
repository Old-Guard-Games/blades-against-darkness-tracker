import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { BlankFaction, DowntimeActivity, FactionModel, IntermediateGoal } from './Faction.model';
import './faction.scss';
import { selectAllFactions } from './factionSlice';

export const EditFaction = () => {
  const factions = useSelector(selectAllFactions).map(i => {
    return {...i};
  });
  let highestId = 0;
  if (factions && factions.length) {
    highestId = factions.reduce((a: number, b: any) => {
      if (a > b.id) {
        return a;
      }
      return b.id;
    },0);
  }

  const blank = BlankFaction();
  blank.id = highestId + 1;
  blank.name = 'New Faction';

  const [chosenFaction, setChosenFaction] = useState(blank);
  const [id, setId ] = useState(blank.id);
  const [name, setName ] = useState(blank.name);
  const [tier, setTier ] = useState(blank.tier);
  const [description, setDescription ] = useState(blank.description);
  const [npcs, setNpcs ] = useState(blank.npcs);
  const [assets, setAssets ] = useState(blank.assets);
  const [allies, setAllies ] = useState(blank.allies);
  const [enemies, setEnemies ] = useState(blank.enemies);
  const [coffers, setCoffers ] = useState(blank.coffers);
  const [relationship, setRelationship ] = useState(blank.relationship);
  const [downtime, setDowntime ] = useState(blank.downtime);
  const [goals, setGoals ] = useState(blank.goals);

  useEffect(() => {
    if (chosenFaction.id === id) {
      return;
    }
    setId(chosenFaction.id);
    setName(chosenFaction.name);
    setTier(chosenFaction.tier);
    setDescription(chosenFaction.description);
    setNpcs(chosenFaction.npcs);
    setAssets(chosenFaction.assets);
    setAllies(chosenFaction.allies);
    setEnemies(chosenFaction.enemies);
    setCoffers(chosenFaction.coffers);
    setRelationship(chosenFaction.relationship);
    setDowntime(chosenFaction.downtime);
    setGoals(chosenFaction.goals);
  }, [id, chosenFaction]);
  
  const onFactionChange = (id: number) => {
    const faction = factions.find((item) => {
      return item.id === Number(id)
    });
    if (!faction) {
      console.log('no faction found');
      setChosenFaction(blank);
      return;
    }
    setChosenFaction(faction);
  }

  const handleExport = () => {
    const out: FactionModel = {
      id, name, tier, description, npcs,
      assets, allies, enemies, coffers,relationship,
      downtime, goals
    }

    const serialized = JSON.stringify(out,null,2);
    console.log(serialized);
  }

  const onDowmtimeChange = (activity: DowntimeActivity, index: number) => {
    const out = downtime.slice();
    out[index] = activity;
    setDowntime(out);
  }
  const renderedDowntime = downtime.map((item, index) => (
    <EditDowntime index={index} item={item} onChange={onDowmtimeChange} key={index} />
  ));

  return (
    <div className="edit-faction">
      <p>
        <label htmlFor="faction-select">Choose Faction:</label>
        <select id='faction-select' name='faction-select' value={chosenFaction.id} onChange={(e:any)=> {console.log(e.target.value); onFactionChange(e.target.value)}} >
          <option value={blank.id}>{blank.name}</option>
          {factions.map((f,i) => (
            <option key={i} value={f.id}>{f.name}</option>
          ))}
        </select>
      </p>


      <p>
        <label htmlFor="faction-id">ID:</label>
        <input type='number' id='faction-id' name='faction-id' value={id} onChange={(e:any)=> setId(e.target.value)} />
      </p>

      <p>
        <label htmlFor="faction-name">Name:</label>
        <input type='text' id='faction-name' name='faction-name' value={name} onChange={(e:any)=> setName(e.target.value)} />
      </p>

      <p>
        <label htmlFor="faction-tier">Tier:</label>
        <input type='number' id='faction-tier' name='faction-tier' value={tier} onChange={(e:any)=> setTier(e.target.value)} />
      </p>

      <p>
        <label htmlFor="faction-relationship">Relationship:</label>
        <input type='number' id='faction-relationship' name='faction-relationship' value={relationship} onChange={(e:any)=> setRelationship(e.target.value)} />
      </p>

      <p>
        <label htmlFor="faction-description">Description:</label>
        <textarea id='faction-description' name='faction-description' value={description} onChange={(e:any)=> setDescription(e.target.value)} />
      </p>

      <p>
        <label htmlFor="faction-coffers">Coffers:</label>
        <input type='number' id='faction-coffers' name='faction-coffers' value={coffers} onChange={(e:any)=> setCoffers(e.target.value)} />
      </p>

      <p>
        <label htmlFor="faction-assets">Assets:</label>
        <input type='text' id='faction-assets' name='faction-assets' value={assets} onChange={(e:any)=> setAssets(e.target.value)} />
      </p>

      <EditStringList label='NPCs' strings={npcs} onUpdate={setNpcs} />
      <EditStringList label='Allies' strings={allies} onUpdate={setAllies} />
      <EditStringList label='Enemies' strings={enemies} onUpdate={setEnemies} />

      <div className="downtime-activities">
        <h3>Downtime</h3>
        { renderedDowntime }
      </div>

      <div className="goals">
        {goals.intermediate.map((goal, index) => (
          <EditGoal index={index} item={goal} onChange={() => {}} />
        ))}
      </div>

      <button onClick={handleExport}>Export Data</button>
    </div>
  )

}

type EditStringListProps = {
  label: string,
  strings: string[],
  onUpdate: (strings: string[]) => void
}

const EditStringList = ({label, strings, onUpdate}: EditStringListProps) => {
  const id = label.toLowerCase().replaceAll(' ','-');

  const onChange = (e: any) => {
    onUpdate(e.target.value.split('\n'));
  }
  
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <textarea name={id} id={id} value={strings.join('\n')}
        onChange={onChange} />
    </div>
  )
}

type EditDowntimeProps = {
  item: DowntimeActivity,
  index: number,
  onChange: (item: DowntimeActivity, index: number) => void
}

const EditDowntime = ({item, index, onChange}: EditDowntimeProps) => {
  const { name, icon, description, available, plusOne, minusOne } = item;
  
  const doChange = (key: string, value: any) => {
    const out: any = { name, icon, description, available, plusOne, minusOne };
    out[key] = value;

    onChange(out, index);
  }

  return (
    <div className="downtime-activity">
      <h4 className="index">{name}</h4>

      <p>{ description } </p>
      
      <p>
        <label htmlFor={'downtime-available-'+index}>
          Available:
          <input type='checkbox' id={'downtime-available-'+index} name={'downtime-available-'+index} checked={available} onClick={(e:any)=> doChange('available',!available)} />
        </label>
      </p>


      <p>
        <label htmlFor={'downtime-plusOne-'+index}>+1d:</label>
        <input type='text' id={'downtime-plusOne-'+index} name={'downtime-plusOne-'+index} value={plusOne} onChange={(e:any)=> doChange('plusOne',e.target.value)} />
      </p>

      <p>
        <label htmlFor={'downtime-minusOne-'+index}>MinusOne:</label>
        <input type='text' id={'downtime-minusOne-'+index} name={'downtime-minusOne-'+index} value={minusOne} onChange={(e:any)=> doChange('minusOne',e.target.value)} />
      </p>
    </div>
  )

}

type EditGoalProps = {
  item: IntermediateGoal,
  index: number,
  onChange: (item: IntermediateGoal, index: number) => void
}

const EditGoal = ({item, index, onChange}: EditGoalProps) => {
  return (<></>);
}