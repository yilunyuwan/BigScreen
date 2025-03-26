import React from 'react';
import {baseEChartOptions, Chart, primaryColor} from '../lib/Chart';
import * as echarts from 'echarts';
import {px} from '../lib/px';

export const FansTrends: React.FC = ()=>{
  const options = React.useMemo<echarts.EChartsOption>(()=>{
    return {
      ...baseEChartOptions,
      grid:{
        ...baseEChartOptions.grid,
        bottom: '18%'
      },
      legend: {
        bottom: px(10),
        textStyle: {color: primaryColor},
        itemWidth: px(24),
        itemHeight: px(16)
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        splitLine: {show: true, lineStyle: {color: '#073E78', type: 'dashed'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'log',
        scale: true,
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter: function(val) {
            return val<1000000? (val /1000).toFixed(0) + 'K' : (val /1000000).toFixed(0) + 'M'
          }
        }
      },
      series: [
        {
          name: '微博',
          type: 'line',
          data: [8000, 12000, 13000, 230000, 480000, 660000, 830000, 950000, 1000000]
        },
        {
          name: '口袋48',
          type: 'line',
          data: [null, null, 15000, 30000, 35000, 39000, 45000, 51000, 53000]
        },
        {
          name: 'B站',
          type: 'line',
          data: [null, null, null, null, null, 4013, 8256, 9000, 9424]
        },
        {
          name: '抖音',
          type: 'line',
          data: [null, null, null, null, null, 15000, 30000, 35000, 39000]
        },
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        smooth: true
      }))
    } as echarts.EChartsOption
  }, [window.pageWidth])
  return(
    <div className="bordered 粉丝数量 displayBlock">
      <h2>粉丝数量趋势</h2>
      <Chart options={options}/>
    </div>
  )
}