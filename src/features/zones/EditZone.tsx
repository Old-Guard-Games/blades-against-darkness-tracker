import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { blankZone, TitleAndDesc } from './Zone.model';
import './zone.scss';
import { selectAllZones } from './zoneSlice';


export const EditZone = () => {
  const zones = useSelector(selectAllZones);
  let highestId = 0;
  if (zones && zones.length) {
    highestId = zones.reduce((a:number,b:any) => {
      if (a > b.id) {
        return a;
      }
      return b.id;
    },0);
  }

  const blank = blankZone(highestId +1);
  blank.name = 'New Zone';

  const [chosenZone, setChosenZone ] = useState(blank);
  const [id, setId] = useState(blank.id);
  const [name, setName] = useState(blank.name);
  const [description, setDescription] = useState(blank.description);
  const [ire, setIre] = useState(blank.ire);
  const [sprites, setSprites] = useState(blank.sprites as TitleAndDesc[]);
  const [awakening, setAwakening] = useState(blank.awakening as TitleAndDesc[]);
  const [entanglements, setEntanglements] = useState(blank.entanglements as TitleAndDesc[]);

  useEffect(() => {
    if (chosenZone.id === id) {
      return;
    }
    setId(chosenZone.id);
    setName(chosenZone.name);
    setDescription(chosenZone.description);
    setIre(chosenZone.ire);
    setSprites(chosenZone.sprites);
    setAwakening(chosenZone.awakening);
    setEntanglements(chosenZone.entanglements);
  },[id, chosenZone]);

  const onZoneChange = (id: number) => {
    const zone = zones.find((item) => item.id === Number(id));
    if (!zone) {
      setChosenZone(blank);
      return;
    }
    setChosenZone(zone);
  }
  

  const defaultTADConfig: TitleAndDescFieldsConfig = {
    titleLabel: 'Title',
    descriptionLabel: 'Description'
  }
  const spriteTADConfig: TitleAndDescFieldsConfig = {
    titleLabel: 'Title',
    descriptionLabel: 'Aspects'
  }

  const onClickExport = () => {
    const out = {
      id, name, description, ire, sprites, awakening, entanglements
    };
    const serialized = JSON.stringify(out,null,2);
    console.log(serialized);
  }

  return (
    <div className="edit-zone">
      <p>
        <label htmlFor="zone-select">Choose Zone:</label>
        <select id='zone-select' name='zone-select' value={chosenZone.id} onChange={(e:any)=> {console.log(e.target.value); onZoneChange(e.target.value)}} >
          <option value={blank.id}>{blank.name}</option>
          {zones.map((z,i) => (
            <option key={i} value={z.id}>{z.name}</option>
          ))}
        </select>
      </p>

      <p>
        <label htmlFor="zone-id">ID:</label>
        <input type='number' id='zone-id' name='zone-id' value={id} onChange={(e:any)=> setId(e.target.value)} />
      </p>

      <p>
        <label htmlFor="zone-name">Name:</label>
        <input type='text' id='zone-name' name='zone-name' value={name} onChange={(e:any)=> setName(e.target.value)} />
      </p>

      <p>
        <label htmlFor="zone-description">Description:</label>
        <textarea id='zone-description' name='zone-description' value={description} onChange={(e:any)=> setDescription(e.target.value)} />
      </p>

      <p>
        <label htmlFor="zone-ire">Ire:</label>
        <input type='number' id='zone-ire' name='zone-ire' value={ire} onChange={(e:any)=> setIre(e.target.value)} />
      </p>

      <h3>Sprites</h3>
      <EditElements elements={sprites} config={spriteTADConfig} onChange={setSprites}/>

      <h3>Awakening</h3>
      <EditElements elements={awakening} config={defaultTADConfig} onChange={setAwakening}/>

      <h3>Entanglements</h3>
      <EditElements elements={entanglements} config={defaultTADConfig} onChange={setEntanglements}/>

      <button onClick={onClickExport}>Export</button>
    </div>
  )


}

type TitleAndDescFieldsConfig = {
  titleLabel: string,
  descriptionLabel: string
}

type EditElementsProps = {
  elements: TitleAndDesc[],
  config: TitleAndDescFieldsConfig,
  onChange: (items: TitleAndDesc[]) => void
};

const EditElements = ({elements, config, onChange}: EditElementsProps) => {

  const handleElementChange = (element: TitleAndDesc, index: number) => {
    console.log('handling updated element',index, element);
    const out = elements.slice();
    out[index] = element;
    onChange(out);
  }

  const renderedChildren = elements.map((element, index) => {
    return (
      <EditSingleElement
        key={index}
        index={index}
        config={config}
        element={element}
        onChange={handleElementChange}
        />
    );
  });

  return (
    <div className='elements'>
      {renderedChildren}
    </div>
  )
}

type EditSingleElementProps = {
  element: TitleAndDesc,
  onChange: (e: TitleAndDesc, n: number)=>void,
  index: number,
  config: TitleAndDescFieldsConfig
}

const EditSingleElement = ({element, onChange, config, index}: EditSingleElementProps) => {
  const { title, description } = element;

  const doUpdate = (k: string, v: any) => {
    const out: any = {
      ...element
    };
    out[k] = v;
    console.log(`Updated element - set ${k} to ${v}`);
    console.log(out);
    onChange(out, index);
  }

  return (
    <div className='single-element'>
      <span className="element-number">{index + 1}</span>
      <label htmlFor={`element-title-${index}`}>{config.titleLabel}:</label>
      <input type='text' id={`element-title-${index}`} value={title} onChange={(e:any) => doUpdate('title', e.target.value)}></input>
      <label htmlFor={`element-description-${index}`}>{config.descriptionLabel}:</label>
      <textarea id={`element-description-${index}`} value={description} onChange={(e:any) => doUpdate('description', e.target.value)} />
    </div>
  )

}
