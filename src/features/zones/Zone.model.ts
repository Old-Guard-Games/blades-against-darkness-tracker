
export interface ZoneModel {
  id: number;
  name: string;
  description: string;
  ire: number;
  sprites: Sprite[];
  awakening: Awakening[];
  entanglements: Entanglement[];
}

export interface TitleAndDesc {
  id: string;
  title: string;
  description: string;
  active?: boolean;
}

export interface Sprite extends TitleAndDesc {}
export interface Awakening extends TitleAndDesc {}
export interface Entanglement extends TitleAndDesc {}

export const blankZone: (id: number) => ZoneModel = (id) => {
  return {
    id,
    name: '',
    description: '',
    ire: 0,
    sprites: blankSprites(id),
    awakening: blankAwakening(id),
    entanglements: blankEntanglements(id),
  }
}

export const blankSprites: (baseId: number) => Sprite[] = (baseId) => {
  const signifier = 's';
  return [
    {id: `${baseId}${signifier}1`, title: '', description: ''},
    {id: `${baseId}${signifier}2`, title: '', description: ''},
    {id: `${baseId}${signifier}3`, title: '', description: ''},
    {id: `${baseId}${signifier}4`, title: '', description: ''},
    {id: `${baseId}${signifier}5`, title: '', description: ''},
    {id: `${baseId}${signifier}6`, title: '', description: ''},
  ];
}

export const blankAwakening: (baseId: number) => Awakening[] = (baseId) => {
  const signifier = 'a';
  return [
    {id: `${baseId}${signifier}1`, title: '', description: ''},
    {id: `${baseId}${signifier}2`, title: '', description: ''},
    {id: `${baseId}${signifier}3`, title: '', description: ''},
    {id: `${baseId}${signifier}4`, title: '', description: ''},
    {id: `${baseId}${signifier}5`, title: '', description: ''},
    {id: `${baseId}${signifier}6`, title: '', description: ''},
  ];
}

export const blankEntanglements: (baseId: number) => Entanglement[] = (baseId) => {
  const signifier = 'e';
  return [
    {id: `${baseId}${signifier}1`, title: '', description: ''},
    {id: `${baseId}${signifier}2`, title: '', description: ''},
    {id: `${baseId}${signifier}3`, title: '', description: ''},
    {id: `${baseId}${signifier}4`, title: '', description: ''},
    {id: `${baseId}${signifier}5`, title: '', description: ''},
    {id: `${baseId}${signifier}6`, title: '', description: ''},
  ];
}