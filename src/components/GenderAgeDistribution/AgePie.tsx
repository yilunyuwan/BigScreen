import React from 'react';
import {Chart, primaryColor} from '../../lib/Chart';
import {LegendItem} from '../LegendItem';
import * as echarts from 'echarts';
import {px} from '../../lib/px';

export const AgePie: React.FC = () =>{
   const colors = ['#8D70F8', '#33A4FA', '#F46064', '#F38E1C', '#1CDB7C']
   const options = React.useMemo<echarts.EChartsOption>(()=>{
      return {
         color: colors,
         xAxis: {show: false},
         yAxis: {show: false},
         legend: {show: false},
         title: {
            text: '年  龄',
            left: '37%',
            top: '41%',
            textStyle: {
               color: primaryColor,
               fontSize: px(32),
               textShadowColor: 'white',
               textShadowBlur: px(16),
            }
         },
         series: [
            {
               name: '年龄',
               type: 'pie',
               radius: ['60%', '75%'],
               avoidLabelOverlap: false,
               label: {
                  show: true, position: 'inside', textStyle: {color: primaryColor, fontSize: px(20)},
                  formatter(params) {
                     return ((params.value as number) * 100).toFixed(0) + '%';
                  }
               },
               labelLine: {show: false},
               itemStyle: {
                  borderColor: '#0F113A',
                  borderWidth: px(4)
               },
               data: [
                  {value: 0.32, name: '10-20'},
                  {value: 0.43, name: '20-30'},
                  {value: 0.18, name: '30-40'},
                  {value: 0.07, name: '40-50'},
               ]
            }
         ]
      }
   },[window.pageWidth])
   return (
     <div className='agePie'>
        <Chart options={options}/>
        <div className="legend">
           <LegendItem color={colors[0]} text='10-20'/>
           <LegendItem color={colors[1]} text='20-30'/>
           <LegendItem color={colors[2]} text='30-40'/>
           <LegendItem color={colors[3]} text='40-50'/>
        </div>
     </div>
   )
}