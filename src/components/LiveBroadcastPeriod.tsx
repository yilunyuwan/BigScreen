import React from 'react';
import {baseEChartOptions, Chart, lineColor} from '../lib/Chart';
import {px} from '../lib/px';
import * as echarts from 'echarts';
import {useToggle} from '../lib/useToggle';

export const LiveBroadcastPeriod: React.FC = () => {
  const fakeData = [[0.18, 0.13, 0.11, 0.13, 0.14, 0.15, 0.16, 0.15, 0.15, 0.16, 0.17, 0.19, 0.21],
    [0.17, 0.18, 0.16, 0.13, 0.15, 0.11, 0.13, 0.19, 0.21, 0.15, 0.15, 0.14, 0.16]]
  const dataIndex = useToggle()
  const options = React.useMemo<echarts.EChartsOption>(()=>{
    return {
      ...baseEChartOptions,
      grid: {
        ...baseEChartOptions.grid,
        left: '5%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: {show: true, lineStyle: {color: lineColor}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: lineColor}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        name: '直播时段',
        type: 'line',
        data: fakeData[dataIndex],
        symbol: 'circle',
        symbolSize: px(10),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    }
  } ,[window.pageWidth, dataIndex])
  return (
    <div className="bordered 直播时段 displayBlock">
      <h2>直播时段统计</h2>
      <Chart options={options}/>
    </div>
  )
}