import React from 'react';
import {useState} from 'react';
import {curveLinear} from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath, AreaClosed } from '@visx/shape';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';

import dayjs from 'dayjs';

import PropTypes from 'prop-types';
import styles from './Chart.module.scss';
import colors from '../../utilities/_export.module.scss';



const width = 500;
const height = 75;
const data = []
let last = 100
let initialDate = dayjs();
for (let i=0; i < 1440; i++) {
  
  let newPrice = Math.max(0, last + Math.random() * 32  - 10);
  let date = dayjs(initialDate.year(), initialDate.month(), initialDate.day())
  date = date.hour(Math.floor(i / 60)).minute(i % 60)
  data.push([date, newPrice]);
  last = data[data.length - 1][1]
}

const x = d => d[0];
const y = d => d[1];

const xScale = scaleTime({
  domain: [Math.min(...data.map(x)), Math.max(...data.map(x))],
});

const yScale = scaleLinear({
  round: true,
  nice: true,
  domain: [0, Math.max(...data.map(y))],
});

const defaultMargin = { top: 40, right: 30, bottom: 50, left: 40 };

const Chart = ({width, margin=defaultMargin }) => {
  
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);
  

  console.log(Math.max(...data.map(y)))
  console.log(Math.min(...data.map(y)))

  let scaledData = []

  for (let i=0; i < 32; i++) {
    // console.log(yScale(y(data[i])))
    scaledData.push([xScale(data[i][0]), yScale(data[i][1])]);
  }

  console.log(scaledData);

  console.log(Math.max(...scaledData.map(y)))
  console.log(Math.min(...scaledData.map(y)))
  return (
    <div>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <GridRows scale={yScale} width={xMax} height={yMax} stroke="#e0e0e0" />
          <GridColumns scale={xScale} width={xMax} height={yMax} stroke="#e0e0e0" />
          <line x1={xMax} x2={xMax} y1={0} y2={yMax} stroke="#e0e0e0" />
          <AxisBottom top={yMax} scale={xScale} numTicks={width > 520 ? 10 : 5} />
          <AxisLeft scale={yScale} />
          <text x="-70" y="15" transform="rotate(-90)" fontSize={10}>
            Temperature (°F)
          </text>
          <AreaClosed
            id={`${Math.random()}`}
            data={scaledData}
            x={x}
            y={y}
            yScale={yScale}
            curve={curveLinear}
            stroke={"#ff0000"}
            fill={"#ff9999"}
          />
        </Group>
      </svg>
    </div>
  );
};

Chart.propTypes = {};

Chart.defaultProps = {};

export default Chart;
