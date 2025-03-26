import React from 'react';
import {Chart, primaryColor} from '../../lib/Chart';
import {LegendItem} from '../LegendItem';
import * as echarts from 'echarts';
import {px} from '../../lib/px';

export const GenderPie: React.FC = () =>{
   const colors = ['#8D70F8', '#33A4FA']
   const options = React.useMemo<echarts.EChartsOption>(()=>{
      return {
         color: colors,
         xAxis: {show: false},
         yAxis: {show: false},
         legend: {show: false},
         title: {
            text:'性  别',
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
               name: '性别',
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
                  {value: 0.56, name: '女'},
                  {value: 0.44, name: '男'},
               ]
            }
         ]
      }
   },[window.pageWidth])
   return (
     <div className='genderPie'>
        <Chart options={options}/>
        <div className="legend">
           <LegendItem color={colors[0]} text='女'/>
           <LegendItem color={colors[1]} text='男'/>
        </div>
     </div>
   )
}