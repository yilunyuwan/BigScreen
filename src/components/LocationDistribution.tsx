import React from 'react';
import {Chart, primaryColor} from '../lib/Chart';
import {geoCoordMap} from '../geo/geoCoordMap';
import * as echarts from 'echarts';
import {px} from '../lib/px';
import {getAirlines} from '../lib/getAirlines';

const locationIcon = 'M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z'
const loveIcon = 'M533.504 268.288q33.792-41.984 71.68-75.776 32.768-27.648 74.24-50.176t86.528-19.456q63.488 5.12 105.984 30.208t67.584 63.488 34.304 87.04 6.144 99.84-17.92 97.792-36.864 87.04-48.64 74.752-53.248 61.952q-40.96 41.984-85.504 78.336t-84.992 62.464-73.728 41.472-51.712 15.36q-20.48 1.024-52.224-14.336t-69.632-41.472-79.872-61.952-82.944-75.776q-26.624-25.6-57.344-59.392t-57.856-74.24-46.592-87.552-21.504-100.352 11.264-99.84 39.936-83.456 65.536-61.952 88.064-35.328q24.576-5.12 49.152-1.536t48.128 12.288 45.056 22.016 40.96 27.648q45.056 33.792 86.016 80.896z'
const Locations = ['北京', '乌鲁木齐', '南京', '哈尔滨', '广州', '成都', '武汉', '西安', '郑州', '青岛', '西安', '兰州', '台北']
const Destination = '上海'
const airlinesData = getAirlines(Locations, Destination)

export const LocationDistribution: React.FC = () => {
  const options = React.useMemo<echarts.EChartsOption>(()=>{
    return {
      backgroundColor: '#010310',
      geo: {
        map: 'china',
        layoutCenter: ['50%', '60%'],
        layoutSize: px(780),

        itemStyle: {
          areaColor: '#010D3D',
          borderColor: '#01A7F7',
          borderWidth: 1,
        },
        emphasis: {
          itemStyle:{
            areaColor: '#5470C6'
          },
          label: {
            show: true,
            color: primaryColor,
          },
        }
      },
      series: [
        { // 拖尾轨迹
          type: 'lines',
          zlevel: 2,
          animation: false,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: 'white',
            symbolSize: px(3)
          },
          lineStyle: {
            width: 0,
            curveness: 0.2
          },
          data: airlinesData
        },
        { // 航线
          type: 'lines',
          lineStyle: {
            color: primaryColor,
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          },
          data: airlinesData
        },
        { // 出发点涟漪及名称显示
          type: 'effectScatter',
          coordinateSystem: 'geo',
          rippleEffect: {
            brushType: 'stroke',
            period: 8,
            color: primaryColor
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{b}',
            color: primaryColor
          },
          symbolSize: px(10),
          itemStyle: {
            color: primaryColor,
          },
          data: Locations.map((location)=>{
            return {
              name: location,
              value: geoCoordMap[location]
            }
          })
        },
        { // 目的地跳动爱心及名称显示
          type: 'custom',
          coordinateSystem: 'geo',
          zlevel: 3,
          renderItem: function(params, api){
            const [x, y] = api.coord([api.value(0, params['dataIndex']), api.value(1, params['dataIndex'])])
            return {
              type: 'group',
              x: x,
              y: y,
              children:[
                {
                  type: 'path',
                  shape:{
                    pathData: loveIcon,
                    x: - px(12),
                    y: - px(12),
                    width: px(24),
                    height: px(24)
                  },
                  style:{
                    fill: 'red'
                  },
                  keyframeAnimation: {
                    duration: 1500,
                    loop: true,
                    keyframes: [
                      {
                        percent: 0.3,
                        easing: 'cubicOut',
                        y: -px(12)
                      },
                      {
                        percent: 1,
                        easing: 'bounceOut',
                        y: 0
                      }
                    ]
                  }
                },
                {
                  type: 'text',
                  x: px(16),
                  y: -px(4),
                  style: {
                    text: Destination,
                    fill: primaryColor
                  },
                  textConfig: {
                    position: 'right'
                  },
                }
              ]
            }
          },
          data: [{
            name: Destination,
            value: geoCoordMap[Destination]
          }]
        },
      ]
    } as echarts.EChartsOption;
  }, [window.pageWidth])


  return (
    <div className="bordered 所在地 displayBlock">
      <h2>粉丝所在地分布</h2>
      <Chart options={options} requireMap={true}/>
    </div>
  )
}