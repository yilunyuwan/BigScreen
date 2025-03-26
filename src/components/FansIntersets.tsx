import React from 'react';
import * as echarts from 'echarts';
import {baseEChartOptions, Chart, primaryColor} from '../lib/Chart';
import {px} from '../lib/px';
import {LegendItem} from './LegendItem';

export const FansInterests:React.FC = () => {
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  const options = React.useMemo<echarts.EChartsOption>(()=>{
    return {
      ...baseEChartOptions,
      color: colors,
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          startAngle: 13,
          type: 'pie',
          radius: ['25%', '70%'],
          label: {
            show: true,
            position: 'outside',
            color: primaryColor,
            fontSize: px(20),
            distanceToLabelLine: 0,
            formatter(params) {
              return (params.value as number) * 100 + '%';
            }
          },
          labelLine: {show: true, length: 0},
          roseType: 'area',
          itemStyle: {
            shadowBlur: px(200),
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          data: [
            {value: 0.31, name: 'MC'},
            {value: 0.25, name: '直播'},
            {value: 0.20, name: '文采'},
            {value: 0.24, name: '歌舞'},
          ]
        }
      ]
    }
  }, [window.pageWidth])
  return (
    <div className="bordered 吸粉途径 displayBlock">
      <h2>吸粉途径统计</h2>
      <Chart options={options}/>
      <div className="legend">
        <LegendItem color={colors[0]} text='MC'/>
        <LegendItem color={colors[1]} text='直播'/>
        <LegendItem color={colors[2]} text='文采'/>
        <LegendItem color={colors[3]} text='歌舞'/>
      </div>
    </div>
  )
}