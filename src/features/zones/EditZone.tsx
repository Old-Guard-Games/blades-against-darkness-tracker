import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { blankZone, TitleAndDesc } from './Zone.model';
import './zone.scss';


export const EditZone = () => {
  const zones = useSelector((state: any) => state?.zones?.data);
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

  const [id, setId] = useState(blank.id);
  const [name, setName] = useState(blank.name);
  const [description, setDescription] = useState(blank.description);
  const [ire, setIre] = useState(blank.ire);
  const [sprites] = useState(blank.sprites as TitleAndDesc[]);
  const [awakening] = useState(blank.awakening as TitleAndDesc[]);
  const [entanglements] = useState(blank.entanglements as TitleAndDesc[]);

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
      <EditElements elements={sprites} baseId={id+'s'} config={spriteTADConfig} />

      <h3>Awakening</h3>
      <EditElements elements={awakening} baseId={id+'a'} config={defaultTADConfig} />

      <h3>Entanglements</h3>
      <EditElements elements={entanglements} baseId={id+'e'} config={defaultTADConfig} />

      <button onClick={onClickExport}>Export</button>
    </div>
  )


}

type TitleAndDescFieldsConfig = {
  titleLabel: string,
  descriptionLabel: string
}

type EditElementsProps = {
  baseId: string,
  elements: TitleAndDesc[],
  config: TitleAndDescFieldsConfig
};

const EditElements = ({baseId, elements, config}: EditElementsProps) => {
  const genId = (index: number) => baseId + index + 1;

  const handleElementChange = (element: TitleAndDesc, index: number) => {
    elements[index] = element;
  }

  const renderedChildren = elements.map((element, index) => {
    const id = genId(index);
    return (
      <EditSingleElement
        key={id}
        index={index}
        config={config}
        element={{...element, id}}
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
  const [title, setTitle ] = useState(element.title);
  const [description, setDescription ] = useState(element.description);

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  }

  const onChangeDescription = (e: any) => {
    setDescription(e.target.value);
  }
  
  useEffect(() => {
    onChange({
      ...element,
      title, description
    }, index);
  }, [title, description, index, element, onChange]);

  return (
    <div className='single-element'>
      <span className="element-number">{index + 1}</span>
      <label htmlFor={`${element.id}-title`}>{config.titleLabel}:</label>
      <input type='text' id={`${element.id}-title`} value={title} onChange={onChangeTitle}></input>
      <label htmlFor={`${element.id}-description`}>{config.descriptionLabel}:</label>
      <textarea id={`${element.id}-description`} value={description} onChange={onChangeDescription} />
    </div>
  )

}
