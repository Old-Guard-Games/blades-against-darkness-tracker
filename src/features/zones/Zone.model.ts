
export interface ZoneModel {
  id: number;
  name: string;
  description: string;
  ire: number;
  sprites: Sprite[];
  awakening: Awakening[];
  entanglements: Entanglement[];
}

export interface Sprite {
  id: number;
  title: string;
  aspects: string[];
}

export interface TitleAndDesc {
  id: number;
  title: string;
  description: string;
}

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
  const base = baseId*10;
  return [
    {id: baseId+1, title: '', aspects: []},
    {id: baseId+2, title: '', aspects: []},
    {id: baseId+3, title: '', aspects: []},
    {id: baseId+4, title: '', aspects: []},
    {id: baseId+5, title: '', aspects: []},
    {id: baseId+6, title: '', aspects: []},
  ];
}

export const blankAwakening: (baseId: number) => Awakening[] = (baseId) => {
  const base = baseId*10;
  return [
    {id: baseId+11, title: '', description: ''},
    {id: baseId+12, title: '', description: ''},
    {id: baseId+13, title: '', description: ''},
    {id: baseId+14, title: '', description: ''},
    {id: baseId+15, title: '', description: ''},
    {id: baseId+16, title: '', description: ''},
  ];
}

export const blankEntanglements: (baseId: number) => Entanglement[] = (baseId) => {
  const base = baseId*10;
  return [
    {id: baseId+21, title: '', description: ''},
    {id: baseId+22, title: '', description: ''},
    {id: baseId+23, title: '', description: ''},
    {id: baseId+24, title: '', description: ''},
    {id: baseId+25, title: '', description: ''},
    {id: baseId+26, title: '', description: ''},
  ];
}