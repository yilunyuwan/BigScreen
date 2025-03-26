import React, {useEffect, useState} from 'react';
import {baseEChartOptions, Chart, primaryColor} from '../lib/Chart';
import {px} from '../lib/px';
import * as echarts from 'echarts';
import {useToggle} from '../lib/useToggle';

export const PerformanceCounting: React.FC = () => {
  const fakeData = [[31, 20, 38, 11, 18, 62, 30], [27, 20, 13, 20, 27, 34, 41]]
  const dataIndex = useToggle()
  const options = React.useMemo<echarts.EChartsOption>(() => {
    return {
      ...baseEChartOptions,
      grid: {
        left: '10%',
        top: '10%',
        right: '8%',
        bottom: '15%',
      },
      xAxis: {
        data: ['前所未有', '我的太阳', '专属派对', '我们向前冲', '以爱之名', '时之卷', '羽化成蝶'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          interval: 0,
          fontSize: px(12),
          rotate: 20,
          align: 'center',
          formatter(val) {
            return '\n' + val;
          }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [{
        type: 'bar',
        data: fakeData[dataIndex],
        label: {
          show: true,
          position: 'top',
          fontSize: px(12),
          color: primaryColor
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0,
            [
              {
                offset: 0,
                color: '#2034f9',
              },
              {
                offset: 1,
                color: '#04a1ff',
              },
            ],
          ),
        },
      }]
    };
  }, [window.pageWidth, dataIndex]);

  return (
    <div className="公演次数 bordered displayBlock">
      <h2>公演次数统计</h2>
      <Chart options={options}/>
    </div>
  );
};