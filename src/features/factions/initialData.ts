import { FactionModel } from './Faction.model';

const WhiteHand: FactionModel = {
  id: 1,
  name: 'The White Hand',
  tier: 1,
  description: 'A Trau smuggling operation based in the Chimeran Wastes. Led by Nihari Hitan they act as bandits in the underground often extorting tolls for "protection" from people exploring the catacombs. Also known to hire out their services as assassins. It is rumored that they have an on going war with The Falconers who are also known to serve as Copperheads. The White Hand, like many Trau, are also dedicated to keeping any sleeping Witch Kings from waking.  Though,for the White Hand this is only a passing concern.',
  npcs: [
    'Nihari (Hardened, cold, family woman)',
    'Lufti Chadrash (Chimera, monster hunter, loremaster)'
  ],
  assets: 'knowledge of the underground, understanding of toxins and alchemy',
  allies: ['Anyone with coin enough to hire their services'],
  enemies: ['The Falconers', 'Church of Maloch'],
  coffers: 3,
  relationship: 0,
  downtime: [
    {
      name: 'Acquire Asset',
      description: 'Gain use of a rare or powerful asset (keg of gunpowder, specialist hireling, magical scroll, etc.)',
      available: true,
      plusOne: 'poisons, explosives, drugs',
      minusOne: ''
    },
    {
      name: 'Long Term Project',
      description: 'Make a test to make ticks on long term project clock. The number of dice is based on the tools at hand and the action taken 1-3: one segment, 4/5: two segments, 6: three segments, crit: five segments.',
      available: true,
      plusOne: 'access and leverage on NPCs',
      minusOne: 'anything else'
    },
    {
      name: 'Recovery',
      description: 'Get treatment for your harm.  Roll Tier and mark on your healing clock. 1-3: 1, 4/5: 2, 6: 3, Crit: 5',
      available: false,
      plusOne: '',
      minusOne: ''
    },
    {
      name: 'Indulge Vice',
      description: 'Roll 1d per 3 expended Resist (rounded up). Gain Resist equal to the highest number rolled. Overindulge if you would end up with more than 10 Resist.',
      available: true,
      plusOne: 'stupor',
      minusOne: 'anything else'
    },
    {
      name: 'Reveal Something',
      description: 'Describe a scene that tells us something about your character that fills in details or answers questions, then Mark XP',
      available: true,
      plusOne: '',
      minusOne: ''
    }
  ],
  goals: {
    longTerm: 'Control the underground',
    intermediate: [
      {
        segments: 8,
        progress: 0,
        nextStep: 'Establish base in Chimeran Wastes'
      },
      {
        segments: 8,
        progress: 0,
        nextStep: 'Weaken the Falconers'
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      }
    ]
  }
}

const SilverFlame: FactionModel = {
  id: 2,
  name: 'The Silver Flame',
  tier: 2,
  description: 'Fallen Tessian house that is now led by the strange sorcerer Rhadjin. The last scion of the line, Orquida Hafiz was contated by Rhadjin and burned through his families resources to make their connection to this world possible. Now Orquida marshals the last of his families knights and serfs to build a home for Rhadjin’s coming exiled people. Orquida believes that Rjadjin and their people will guide this world into a new age of enlightenment and peace.',
  npcs: [
    'Rhadjin (otherworldly, gentle, cryptic)',
    'Orquida (last scion, devout, enthralled)'
  ],
  assets: 'Access to impossible tools from elsewhere, pathways through The Weft, a last cadre of devoted knights',
  allies: [],
  enemies: ['House Caverall'],
  coffers: 5,
  relationship: 2,
  downtime: [
    {
      name: 'Acquire Asset',
      description: 'Gain use of a rare or powerful asset (keg of gunpowder, specialist hireling, magical scroll, etc.)',
      available: true,
      plusOne: 'Arcane implements',
      minusOne: 'anything else'
    },
    {
      name: 'Long Term Project',
      description: 'Make a test to make ticks on long term project clock. The number of dice is based on the tools at hand and the action taken 1-3: one segment, 4/5: two segments, 6: three segments, crit: five segments.',
      available: true,
      plusOne: 'History and magic',
      minusOne: 'anything else'
    },
    {
      name: 'Recovery',
      description: 'Get treatment for your harm.  Roll Tier and mark on your healing clock. 1-3: 1, 4/5: 2, 6: 3, Crit: 5',
      available: true,
      plusOne: '',
      minusOne: ''
    },
    {
      name: 'Indulge Vice',
      description: 'Roll 1d per 3 expended Resist (rounded up). Gain Resist equal to the highest number rolled. Overindulge if you would end up with more than 10 Resist.',
      available: false,
      plusOne: 'weird',
      minusOne: ''
    },
    {
      name: 'Reveal Something',
      description: 'Describe a scene that tells us something about your character that fills in details or answers questions, then Mark XP',
      available: true,
      plusOne: '',
      minusOne: ''
    }
  ],
  goals: {
    longTerm: 'Open a path from their world to this one.',
    intermediate: [
      {
        segments: 8,
        progress: 0,
        nextStep: 'Communication link with home'
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      }
    ]
  }
}

const StrychnineSyndicate: FactionModel = {
  id: 3,
  name: 'The Strychnine Syndicate',
  tier: 2,
  description: 'Cervantes Latan leads the daring, or mad, group of tomb robbers who are recently risen to power due to their fearless raids and disdain for established claims. They are also known for riotous celebrations after a raid that often end with the Gray Foxes and a Penitent fire brigade being forced to intervene. Recently rich scores have increased membership. Cervantes is a self styled warlord who hires the syndicate out as troops. Their long term plan is to establish dominion over territory of their own.',
  npcs: [
    'Cervantes Latan (charismatic, lethal, calculating)',
    'Ariel Marut (Fearless, possibly mad, devout)'
  ],
  assets: 'Bands of professional dungeon punks',
  allies: ['Hevlan Trading Company'],
  enemies: [
    'White Hand Clan',
    'The Grey Foxes',
    'The Penitent',
  ],
  coffers: 7,
  relationship: -1,
  downtime: [
    {
      name: 'Acquire Asset',
      description: 'Gain use of a rare or powerful asset (keg of gunpowder, specialist hireling, magical scroll, etc.)',
      available: true,
      plusOne: 'Weapons, fighters',
      minusOne: 'anything else'
    },
    {
      name: 'Long Term Project',
      description: 'Make a test to make ticks on long term project clock. The number of dice is based on the tools at hand and the action taken 1-3: one segment, 4/5: two segments, 6: three segments, crit: five segments.',
      available: false,
      plusOne: '',
      minusOne: ''
    },
    {
      name: 'Recovery',
      description: 'Get treatment for your harm.  Roll Tier and mark on your healing clock. 1-3: 1, 4/5: 2, 6: 3, Crit: 5',
      available: true,
      plusOne: '',
      minusOne: ''
    },
    {
      name: 'Indulge Vice',
      description: 'Roll 1d per 3 expended Resist (rounded up). Gain Resist equal to the highest number rolled. Overindulge if you would end up with more than 10 Resist.',
      available: true,
      plusOne: 'stupor, gambling, pleasure',
      minusOne: 'anything else'
    },
    {
      name: 'Reveal Something',
      description: 'Describe a scene that tells us something about your character that fills in details or answers questions, then Mark XP',
      available: true,
      plusOne: '',
      minusOne: ''
    }
  ],
  goals: {
    longTerm: 'Establish an independent state',
    intermediate: [
      {
        segments: 8,
        progress: 0,
        nextStep: 'Establish a base in Chimeran Wastes'
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      }
    ]
  }
}

const Thunderhead: FactionModel = {
  id: 4,
  name: 'The Thunderhead',
  tier: 0,
  description: 'An Ush\'dvani resistance band led by Mata Nadiya. After a crushing defeat, most of their forces have been stationed in the outskirts of Ironwood. Currently attempting to rebuild their forces and procure tools which will give them leverage against the invading forces. The Thunderhead fights to keep outlander organizations like the Hevlan Trading Company and House of Maloch from gaining any more influence in the land.  They are a polyglot of various peoples and guerrilla fighters',
  npcs: [
    'Mata Nadiya (leader, vengeful, witty)',
    'Kaladin Khan (Swordmaster, grinning, loyal)'
  ],
  assets: 'Expert guerrilla fighters and scouts, Knowledge of the terrain',
  allies: [
    'House Caverall',
    'White Hand Clan'
  ],
  enemies: [
    'Hevlan Trading Company',
    'Church of Maloch'
  ],
  coffers: 2,
  relationship: 0,
  downtime: [
    {
      name: 'Acquire Asset',
      description: 'Gain use of a rare or powerful asset (keg of gunpowder, specialist hireling, magical scroll, etc.)',
      available: true,
      plusOne: 'Scouts, troops, fighters',
      minusOne: 'anything else'
    },
    {
      name: 'Long Term Project',
      description: 'Make a test to make ticks on long term project clock. The number of dice is based on the tools at hand and the action taken 1-3: one segment, 4/5: two segments, 6: three segments, crit: five segments.',
      available: true,
      plusOne: 'Leverage on enemy factions',
      minusOne: 'anything else'
    },
    {
      name: 'Recovery',
      description: 'Get treatment for your harm.  Roll Tier and mark on your healing clock. 1-3: 1, 4/5: 2, 6: 3, Crit: 5',
      available: false,
      plusOne: '',
      minusOne: ''
    },
    {
      name: 'Indulge Vice',
      description: 'Roll 1d per 3 expended Resist (rounded up). Gain Resist equal to the highest number rolled. Overindulge if you would end up with more than 10 Resist.',
      available: true,
      plusOne: 'gambling, pleasure, stupor',
      minusOne: 'anything else'
    },
    {
      name: 'Reveal Something',
      description: 'Describe a scene that tells us something about your character that fills in details or answers questions, then Mark XP',
      available: true,
      plusOne: '',
      minusOne: ''
    }
  ],
  goals: {
    longTerm: '',
    intermediate: [
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      }
    ]
  }
}

const factions = [
  WhiteHand,
  SilverFlame,
  StrychnineSyndicate,
  Thunderhead
];
export default factions;

export const Blank: FactionModel = {
  id: 5,
  name: '',
  tier: 0,
  description: '',
  npcs: [],
  assets: '',
  allies: [],
  enemies: [],
  coffers: 5,
  relationship: 0,
  downtime: [
    {
      name: 'Acquire Asset',
      description: 'Gain use of a rare or powerful asset (keg of gunpowder, specialist hireling, magical scroll, etc.)',
      available: false,
      plusOne: '',
      minusOne: ''
    },
    {
      name: 'Long Term Project',
      description: 'Make a test to make ticks on long term project clock. The number of dice is based on the tools at hand and the action taken 1-3: one segment, 4/5: two segments, 6: three segments, crit: five segments.',
      available: false,
      plusOne: '',
      minusOne: ''
    },
    {
      name: 'Recovery',
      description: 'Get treatment for your harm.  Roll Tier and mark on your healing clock. 1-3: 1, 4/5: 2, 6: 3, Crit: 5',
      available: false,
      plusOne: '',
      minusOne: ''
    },
    {
      name: 'Indulge Vice',
      description: 'Roll 1d per 3 expended Resist (rounded up). Gain Resist equal to the highest number rolled. Overindulge if you would end up with more than 10 Resist.',
      available: true,
      plusOne: '',
      minusOne: ''
    },
    {
      name: 'Reveal Something',
      description: 'Describe a scene that tells us something about your character that fills in details or answers questions, then Mark XP',
      available: true,
      plusOne: '',
      minusOne: ''
    }
  ],
  goals: {
    longTerm: '',
    intermediate: [
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      },
      {
        segments: 8,
        progress: 0,
        nextStep: ''
      }
    ]
  }
}