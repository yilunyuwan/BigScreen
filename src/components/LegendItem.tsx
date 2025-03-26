import React from 'react';

interface Props {
  color: string;
  text: string;
}

export const LegendItem: React.FC<Props> = (props) => {
  const {color, text} = props
  return(
    <div className='legendItem'>
      <span className='colorBar' style={{background: color}}> </span>
      <span className='text'>{text}</span>
    </div>
  )
}