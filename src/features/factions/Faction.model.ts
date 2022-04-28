const DEFAULT_CLOCK_SIZE = 8;

export interface FactionModel {
  id: number;
  name: string;
  tier: number;
  description: string;
  npcs: string[];
  assets: string;
  allies: string[];
  enemies: string[];
  coffers: number;
  relationship: number;
  downtime: DowntimeActivity[];
  goals: Goals;
}


export interface DowntimeActivity {
  name: string;
  icon: 'bandage' | 'beer' | 'hourglass' | 'bag' | 'torch';
  description: string;
  available: boolean;
  plusOne: string;
  minusOne: string;
}

export interface Goals {
  longTerm: string;
  intermediate: IntermediateGoal[]
}

export interface IntermediateGoal {
  segments: number;
  progress: number;
  nextStep: string;
}

export function BlankFaction(): FactionModel{
  return {
    id: 0,
    name: '',
    tier: 0,
    description: '',
    npcs: [],
    assets: '',
    allies: [],
    enemies: [],
    coffers: 5,
    relationship: 0,
    downtime: BlankDowntime(),
    goals: {
      longTerm: '',
      intermediate: [
        BlankIntermediateGoal(DEFAULT_CLOCK_SIZE),
        BlankIntermediateGoal(DEFAULT_CLOCK_SIZE),
        BlankIntermediateGoal(DEFAULT_CLOCK_SIZE),
        BlankIntermediateGoal(DEFAULT_CLOCK_SIZE),
      ]
    }
  };
}

export function BlankIntermediateGoal(segments: number): IntermediateGoal {
  return {
    segments,
    progress: 0,
    nextStep: ''
  }
}

function BlankDowntime(): DowntimeActivity[] {
  return [{
      icon: 'bag',
      name: 'Acquire Asset',
      description: 'Gain use of a rare or powerful asset (keg of gunpowder, specialist hireling, magical scroll, etc.)',
      available: false,
      plusOne: '',
      minusOne: ''
    },{
      icon: 'hourglass',
      name: 'Long Term Project',
      description: 'Make a test to make ticks on long term project clock. The number of dice is based on the tools at hand and the action taken 1-3: one segment, 4/5: two segments, 6: three segments, crit: five segments.',
      available: false,
      plusOne: '',
      minusOne: ''
    },{
      icon: 'bandage',
      name: 'Recovery',
      description: 'Get treatment for your harm.  Roll Tier and mark on your healing clock. 1-3: 1, 4/5: 2, 6: 3, Crit: 5',
      available: false,
      plusOne: '',
      minusOne: ''
    },{
      icon: 'beer',
      name: 'Indulge Vice',
      description: 'Roll 1d per 3 expended Resist (rounded up). Gain Resist equal to the highest number rolled. Overindulge if you would end up with more than 10 Resist.',
      available: false,
      plusOne: '',
      minusOne: ''
    },{
      icon: 'torch',
      name: 'Reveal Something',
      description:'Describe a scene that tells us something about your character that fills in details or answers questions, then Mark XP',
      available: false,
      plusOne: '',
      minusOne: ''
    },
  ]
}