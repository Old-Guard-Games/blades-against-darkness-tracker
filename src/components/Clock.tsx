import React, {useState, useCallback} from 'react'; // we need this to make JSX compile

import './Clock.scss'

export interface Clock {
  label: string;
  segments: ValidSegment;
  progress: number;
}

type ValidSegment = (4 | 6 | 8 | 10);

function getSegments(n: ValidSegment){
  const segmentation: any = {
    4: [
      (<div className="crossbar" key={0}></div>),
      (<div className="crossbar r90" key={1}></div>)
    ], 6: [
      (<div className="crossbar" key={0}></div>),
      (<div className="crossbar r60" key={1}></div>),
      (<div className="crossbar r120" key={2}></div>),
    ], 8: [
      (<div className="crossbar" key={0}></div>),
      (<div className="crossbar r45" key={1}></div>),
      (<div className="crossbar r90" key={2}></div>),
      (<div className="crossbar r135" key={3}></div>),
    ], 10: [
      (<div className="crossbar" key={0}></div>),
      (<div className="crossbar r36" key={1}></div>),
      (<div className="crossbar r72" key={2}></div>),
      (<div className="crossbar r108" key={3}></div>),
      (<div className="crossbar r144" key={4}></div>),
    ]
};

  return segmentation[n];
}

export function GetClock(seg?: ValidSegment): Clock {
  return {
    label: '',
    segments: seg || 4,
    progress: 0
  }
}

function getAnimationDelay(segments: number, progress: number): number {
  const delay = -1 * (progress / segments * 100);
  return delay > -100 ? delay : -99.9999;
}

export const ClockElement = ({label, segments, progress}: Clock) => {
  const [prog, setProg] = useState(progress);

  const handleClick = useCallback((event:any) => {
    // prevent context menu from opening on right-click
    event.preventDefault();

    let incvalue = 1;
    
    // synthetic event
    switch (event.type) {
      case 'click':
        incvalue = 1;
        break;
      case 'contextmenu':
        incvalue = -1;
        break;
    }

    // native event
    switch (event.nativeEvent.button) {
      case 0:
        incvalue = 1;
        break;
      case 2:
        incvalue = -1;
        break;
    }
    const p = prog + incvalue;
    setProg(p > segments ? 0 : (p < 0 ? 0 : p));
  },[prog,segments]);

  return (<div className={'clock'} title="Left click increment, right decrement" style={{animationDelay: `${getAnimationDelay(segments, prog)}s`}} onClick={handleClick} onContextMenu={handleClick}>
    {getSegments(segments)}
  </div>);
}