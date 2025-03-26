import React, {useEffect, useState} from 'react';
import * as echarts from 'echarts';
import {px} from '../lib/px';
import {baseEChartOptions, Chart, lineColor, primaryColor} from '../lib/Chart';
import GoldMedal from '../assets/金牌.png'
import SilverMedal from '../assets/银牌.png'
import BronzeMedal from '../assets/铜牌.png'
import {LegendItem} from './LegendItem';
import {useToggle} from '../lib/useToggle';

export const FavoriteSong:React.FC = () => {
  const RankSize = { height: px(32), width: px(32)}
  const fakeData = [{
      title: ['时之卷','最终回合', '如果你拥抱我', '错过奇迹', '爱的颜色', '少女的遗憾', '格子裙妖精'],
      femaleCount: [40,25,30,14,14,13,4],
      maleCount:[30,35,20,26,16,7,6]
    },
    {
      title: ['如果你拥抱我', '格子裙妖精', '最终回合', '错过奇迹', '时之卷','爱的颜色', '少女的遗憾'],
      femaleCount: [35,28,33,15,10,12,6],
      maleCount:[35,32,27,25,20,8,4]
    }]
  const dataIndex = useToggle()
  const options = React.useMemo<echarts.EChartsOption>(()=>{
    return{
      ...baseEChartOptions,
      grid:{
        ...baseEChartOptions.grid,
        right: '20%'
      },
      xAxis: {
        type: 'value',
        splitLine: {show: false},
        axisLabel: {show: false}
      },
      yAxis: {
        inverse: true,
        axisTick: {show: false},
        type: 'category',
        data: fakeData[dataIndex].title,
        axisLabel: {
          interval: 0,
          formatter: function (val, index) {
            return index<3?`{rank${index+1}|} {title|${val}}`:`{default|${index+1}} {title|${val}}`
          },
          rich: {
            rank1:{
              ...RankSize,
              backgroundColor:{image:GoldMedal},
            },
            rank2:{
              ...RankSize,
              backgroundColor:{image:SilverMedal},
            },
            rank3:{
              ...RankSize,
              backgroundColor:{image:BronzeMedal},
            },
            default:{
              ...RankSize,
              fontSize: px(16),
              borderWidth: 2,
              borderRadius: px(20),
              borderColor: lineColor,
              align: 'center',
              color: primaryColor
            },
            title: {
              color: primaryColor,
              fontSize: px(20),
              width: px(150)
            }
          }
        }
      },
      series: [
        {
          name: '女',
          type: 'bar',
          data: fakeData[dataIndex].femaleCount,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#2034f9'
            }, {
              offset: 1,
              color: '#04a1ff'
            }]),
          }
        },
        {
          name: '男',
          type: 'bar',
          data: fakeData[dataIndex].maleCount,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#b92ae8'
            }, {
              offset: 1,
              color: '#6773e7'
            }]),
          }
        },
      ]
    } as echarts.EChartsOption
  }, [window.pageWidth, dataIndex])
  return (
    <div className="bordered 喜爱曲目 displayBlock">
      <h2>粉丝喜爱曲目排名</h2>
      <Chart options={options}/>
      <div className="legend">
        <LegendItem color='linear-gradient(90deg, #2034f9 0%, #04a1ff 100%)' text='女'/>
        <LegendItem color='linear-gradient(90deg, #b92ae8 0%, #6773e7 100%)' text='男'/>
      </div>
    </div>
  )
}