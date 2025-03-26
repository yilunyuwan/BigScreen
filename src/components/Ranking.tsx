import React from 'react';
import {baseEChartOptions, Chart, lineColor, primaryColor} from '../lib/Chart';
import * as echarts from 'echarts';
import {px} from '../lib/px';

export const Ranking: React.FC = () => {
  const options = React.useMemo<echarts.EChartsOption>(() => {
    return {
      ...baseEChartOptions,
      grid: {
        ...baseEChartOptions.grid,
        top: '18%'
      },
      legend: {
        top: '2%',
        textStyle: {color: primaryColor},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['第四届', '第五届', '第六届', '第七届', '第八届'],
        splitLine: {show: true, lineStyle: {type: 'dashed', color: lineColor}},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
          interval: 0,
          fontSize: px(16),
          align: 'center',
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {show: true, lineStyle: {color: lineColor}},
        inverse: true,
        min: 'dataMin',
        max: 'dataMax',
        minInterval: 2,
        scale: true,
        axisLabel: {
          show: false,
          fontSize: px(12),
        }
      },

      series: [
        {
          name: '全团排名',
          type: 'line',
          data: [20, 27, 32, 32, 48],
        },
        {
          name: '队内排名',
          type: 'line',
          data: [10, 6, 2, 2, 8],
        }
      ].map((val)=>{return {...val,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        label: {
          show: true,
          position: 'top',
          fontSize: px(12),
          color: primaryColor
        },}})
    } as echarts.EChartsOption;
  }, [window.pageWidth]);

  return (
    <div className="总选排名 bordered displayBlock">
      <h2>历届总选排名</h2>
      <Chart options={options}/>
    </div>
  );
};