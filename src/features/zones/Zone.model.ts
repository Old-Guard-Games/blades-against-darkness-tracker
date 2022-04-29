
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
  return [
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
  ];
}

export const blankAwakening: (baseId: number) => Awakening[] = (baseId) => {
  return [
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
  ];
}

export const blankEntanglements: (baseId: number) => Entanglement[] = (baseId) => {
  return [
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
    { title: '', description: ''},
  ];
}