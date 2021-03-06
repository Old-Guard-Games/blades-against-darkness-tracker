import { ZoneModel } from './Zone.model';

const ChimeranWastes: ZoneModel =  {
  "id": 1,
  "name": "Chimeran Wastes",
  "description": "An unfriendly, dry, arid wasteland. The landscape is made up of primarily sand or hard-packed mud, long dried in the heat. In some lower areas, there is some manner of moisture infusing the mud, turning it into a sticky mess that's hell to walk through. Many unfortunate, desperate souls have made the mistake of trying to extract the liquid and drink it, and have died for that mistake.",
  "ire": 0,
  "sprites": [
    {
      "title": "Serpent",
      "description": "Stealth, Poison, Whispers"
    },
    {
      "title": "Scorpion",
      "description": "Sand, Pain, Darkness"
    },
    {
      "title": "Fox",
      "description": "Foxfire, Deception, Scent"
    },
    {
      "title": "Camel",
      "description": "Endurance, Water, Strength"
    },
    {
      "title": "Hare",
      "description": "Grace, Speed, Hearing"
    },
    {
      "title": "Hawk",
      "description": "Sight, Piercing, Wind"
    }
  ],
  "awakening": [
    {
      "title": "Altar of Blood",
      "description": "Altar to the thirst of Ghul'al grants cultists control over witchfire."
    },
    {
      "title": "Altar of the Screaming Bell",
      "description": "Belltower that calls the souls of the dead to worship. All Vice rolls recover -1 Grit.",
      
    },
    {
      "title": "Altar of Teeth",
      "description": "Altar to the hunger of Ghul'al grants them control over the ghost sharks of the dead sea."
    },
    {
      "title": "Altar of Tongues",
      "description": "All PCs must replace an XP trigger with \"Spill blood unnecessarily and leave the dead unconsecrated.\""
    },
    {
      "title": "Altar of the Grave-Keeper",
      "description": "A seemingly invulnerable specter begins stalking the PCs. At the start of every session, start a clock for its arrival."
    },
    {
      "title": "Vault of Souls",
      "description": "Altar to Ghul'al's greed saps vitality from the living. All recovery rolls suffer -1d."
    }
  ],
  "entanglements": [
    {
      "title": "Favor Owed",
      "description": "An allied faction has a job they need as a result of this job's fallout. Solve their problem or suffer -1 faction status."
    },
    {
      "title": "Revenge",
      "description": "Enemy agents from a wronged faction are actively hunting the party next session."
    },
    {
      "title": "Lean Times",
      "description": "No Acquire Asset rolls during this downtime. All gear rolls next job take +1d."
    },
    {
      "title": "Candlemass",
      "description": "Spirits of the restless dead (past victims?) stalk the party on their next job."
    },
    {
      "title": "Cancer Spreads",
      "description": "Increase Ire in this or another zone by the number of Altars active in Chimeran Wastes."
    },
    {
      "title": "Show of Force",
      "description": "An enemy faction strikes at an allied faction. Come to their defense next session or suffer -1 Relationship."
    }
  ]
};

const FathomlessMere: ZoneModel =  {
  "id": 2,
  "name": "Fathomless Mere",
  "description": "A perfectly circular lake sits at the center of a valley of scrubland. The lake's shores drop nearly vertically into the immeasurable depths. From time to time, strange lights emanate from below, or are sometimes seen in the skies above the lake. Although most attribute these eerie portents to the lake's mysterious origins, some claim they instead come from the many ruins in the valley. Others insist that they originate on the islands dotted around the lake, upon which ominous bonfires of odd colors burn from time to time.",
  "ire": 0,
  "sprites": [
    {
      "title": "Loon",
      "description": "Searching, Mourning, Fog"
    },
    {
      "title": "Frog",
      "description": "Fertility, Luck, Purification"
    },
    {
      "title": "Dragonfly",
      "description": "Change, Courage, Air"
    },
    {
      "title": "Snapping Turtle",
      "description": "Tenacity, Protection, Force"
    },
    {
      "title": "Salamander",
      "description": "Secrets, Resourcefulness, Healing"
    },
    {
      "title": "Eel",
      "description": "Elusiveness, Observation, Water"
    }
  ],
  "awakening": [
    {
      "title": "Beacon of the Mist",
      "description": "Dedicated to the wisdom of Baax'el, grants cultists control over the Dreadmist."
    },
    {
      "title": "Beacon of Agony",
      "description": "Dedicated to the ruthless efficiency of Baax'el, the light is magnifies pain. Level 1 Harm causes further reduced effect, or -1d, player choice."
    },
    {
      "title": "Beacon of Intemperance",
      "description": "Dedicated to the decadence of Baax'el. PCs who indulge their vice overindulge if they have 9 or more Grit afterward."
    },
    {
      "title": "Beacon of Rumination",
      "description": "Dedicated to Baax'el's contemplative nature. Pushing yourself costs 1 additional point of grit."
    },
    {
      "title": "Beacon of the Depths",
      "description": "The great serpent of the lake stirs. When traveling on or in the water, start a clock for its arrival. It will be hungry."
    },
    {
      "title": "Beacon of Conceit",
      "description": "All PCs must replace an XP trigger with \"Throw yourself recklessly at a challenge which is almost certainly above your ability.\""
   }
  ],
  "entanglements": [
    {
      "title": "Perceived Slight",
      "description": "An allied faction is offended. Give them something to mollify them or suffer -1 Reputation."
    },
    {
      "title": "Cult Following",
      "description": "Cultists of an ancient or supernatural power actively seek the downfall of the party next session."
    },
    {
      "title": "Unnatural Notice",
      "description": "A powerful entity approaches them with a proposal. Accept, ignore them and leave them unsatisfied (+3 Ire to the Zone with the highest Ire), or deal with them another way."
    },
    {
      "title": "Rivals",
      "description": "A neutral faction threatens the party, a friend, or a contact. Pay them off (1 Coin per tier of the rival) or stand up to them and lose 1 Reputation with them."
    },
    {
      "title": "Cursed Treasure",
      "description": "Loot from a previous job was cursed and buyers are distrustful of your wares. -1d on treasure rolls until after the next job."
    },
    {
      "title": "Lousy Ameteurs",
      "description": "A party of brand new adventurers made a real mess. Make a fortune roll to see how bad it was (1-3: +2 Ire, 4-5: +1 Ire), or spend 1 Coin to fix it (via flashback?)."
    }
  ]
};

const initialZones = [
  ChimeranWastes,
  FathomlessMere
];

export default initialZones;