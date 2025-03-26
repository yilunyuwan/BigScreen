import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts'
import chinaMap from '../geo/china.json'
import {GeoJSONSourceInput} from 'echarts/types/src/coord/geo/geoTypes';

export interface ChartProps {
  options: echarts.EChartsOption,
  requireMap?: boolean
}
export const Chart: React.FC<ChartProps> = (props) => {
  const {options, requireMap} = props
  const containerRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<echarts.ECharts>(null)

  const initChart = () => {
    if (chartRef.current) {chartRef.current.dispose()}
    chartRef.current = echarts.init(containerRef.current)
    if(requireMap) echarts.registerMap('china', chinaMap as GeoJSONSourceInput)
    chartRef.current.setOption(options, true)
  }

  useEffect(()=>{
    initChart()
  }, [options])

  return (
    <div ref={containerRef} className='chart'
         style={{width: '100%', height: '100%'}}/>
  )
}

export const primaryColor = '#ddeeff'
export const lineColor = '#073E78'
export const baseEChartOptions =  {
  title: {show: false},
  legend: {show: false},
  textStyle: {
    color: primaryColor,
  },
  grid: {
    left: '10%',
    top: '10%',
    right: '10%',
    bottom: '5%',
    containLabel: true,
  },
}
