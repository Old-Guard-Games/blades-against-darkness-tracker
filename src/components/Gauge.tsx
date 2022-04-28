import React from "react";

import './gauge.scss';

export type GaugeProps = {
  max: number,
  current: number,
  width: number,
  endcaps?: boolean,
  pretext?: string,
  posttext?: string
}

export const Gauge = ({max, current, width, endcaps, pretext, posttext}: GaugeProps) => {
  const pipStatus = Array(max);
  const height = width;
  const margin = Math.floor(width * (3/4));
  const borderRadius = Math.ceil(width / 3);

  const style = {
    borderRadius: `${borderRadius}px`,
    width: `${width}px`,
    minWidth: `${width}px`,
    height: `${width}px`,
    minHeight: `${width}px`,
    marginRight: `${margin}px`,
    marginTop: `${Math.ceil(height / 2)}px`
  }

  const flatStyle = `${width * 0.75}px solid black`;
  const pointStyle = `${width * 0.5}px solid transparent`;
  const longWidth = `${width * 1.5}px`;
  const nudgeAmount = width / 4;
  const nudge = `${nudgeAmount}px`;
  const nudge2 = `${nudgeAmount * 3}px`

  const pipBefore = (
    <div style={{...style, width: longWidth}} className='pip pip-before'>
      <div style={{left: nudge, borderLeft: flatStyle, borderTop: pointStyle, borderBottom: pointStyle}}></div>
      <div style={{left: nudge2, borderLeft: flatStyle, borderTop: pointStyle, borderBottom: pointStyle}}></div>
    </div>
  );

  const pipAfter = (
    <div style={{...style, width: longWidth }} className='pip pip-after'>
      <div style={{right: nudge, borderRight: flatStyle, borderTop: pointStyle, borderBottom: pointStyle}}></div>
      <div style={{right: nudge2, borderRight: flatStyle, borderTop: pointStyle, borderBottom: pointStyle}}></div>
    </div>
  );

  for (let i = 1; i <= max; i += 1) {
    if (i > current) {
      pipStatus[i] = false;
    } else {
      pipStatus[i] = true;
    }
  }

  const renderedPips = pipStatus.map((b: boolean) => (
    <div style={style} className={`pip ${b ? 'pip-full' : 'pip-empty'}`}>&nbsp;</div>
  ));

  return (
    <div className="gauge">
      { pretext ? (<div className='pre-post-text'>{pretext}</div>) : ''}
      { endcaps ? pipBefore : ''}
      {renderedPips}
      { endcaps ? pipAfter : ''}
      { posttext ? (<div className='pre-post-text'>{posttext}</div>) : ''}
    </div>
  )
}