import React from 'react';
import {GenderPie} from './GenderPie';
import {AgePie} from './AgePie';

export const GenderAgeDistribution:React.FC = () => {
  return (
    <div className='bordered 年龄分布 displayBlock'>
      <h2>粉丝性别及年龄分布</h2>
      <div className='chartGroup'>
        <GenderPie/>
        <AgePie/>
      </div>
    </div>
  )
}