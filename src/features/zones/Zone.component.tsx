import React from 'react';
import './zone.scss';
import { ZoneModel, TitleAndDesc } from './Zone.model';
import { Gauge } from '../../components/Gauge';

const renderTAD = (tad: TitleAndDesc, index: number) => (
    <TitleAndDescription key={index} element={tad} index={index} />
)

export const Zone = ({zone}: {zone: ZoneModel }) => {
  const {id,name,description, ire, sprites,awakening,entanglements} = zone;
  const renderedSprites = sprites.map(renderTAD);
  const renderedAwakening = awakening.map(renderTAD);
  const renderedEntanglements = entanglements.map(renderTAD);

  const awakened = awakening.reduce((a: number, b: TitleAndDesc) => {
    return a + (b.active ? 1 : 0);
  },0);

  return (
    <section id={`zone-${id}`} className="zone">
      <header>
        <h2> {name} </h2>
        <p className='ire'><strong className='title'>Ire:</strong> <Gauge width={12} max={10} current={ire} /></p>
      </header>
      <p>{description}</p>

      

      <div className="tables">
        <div className="elements">
          <h3>Sprites</h3>
          {renderedSprites}
        </div>
        <div className="elements">
          <h3>Awakening ({awakened}/{awakening.length})</h3>
          {renderedAwakening}
        </div>
        <div className="elements">
          <h3>Entanglements</h3>
          {renderedEntanglements}
        </div>
      </div>
    </section>
  );
}

const TitleAndDescription = ({element, index}: {element: TitleAndDesc, index: number}) => (
  <div className="single-element">
    <span className="element-number">{index+1}</span>
    <p><strong>{element.title}: </strong>{element.description}</p>
    {element.active ? (<span className='active'></span>) : ''}

  </div>
)

export const ZoneMenuItem = ({zone}: {zone: ZoneModel}) => {
  const awakened = zone.awakening.reduce((a: number, b: TitleAndDesc) => {
    return a + (b.active ? 1 : 0);
  },0);

  return (
  <div className='zone-menu'>
    <p className='name'>{zone.name}</p>
    <p className="subtext"><strong>Awakened:</strong> {awakened}/6</p>
    <p className='subtext'><strong className='title'>Ire:</strong> <Gauge width={5} max={10} current={zone.ire} /></p>
  </div>
)}