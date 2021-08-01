import React from 'react';
import {useState} from 'react';
import {curveNatural} from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import generateDateValue, { DateValue } from '@visx/mock-data/lib/generators/genDateValue';

import PropTypes from 'prop-types';
import styles from './MiniChart.module.scss';

const width = 500;
const height = 75;
const data = []
for (let i=0; i < 32; i++) {
  data.push([i, Math.random() * 32]);
}

const x = d => d[0];
const y = d => d[1];


const xScale = scaleLinear({
  range: [0, width],
  round: true,
  domain: [0, Math.max(...data.map(x))],
});
const yScale = scaleLinear({
  range: [-height / 2, height / 2],
  round: true,
  domain: [0, Math.max(...data.map(y))],
});

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

const MiniChart = (props) => {
  return (
    <svg className={styles.MiniChart} viewBox="0 -125 500 125">
      <Group key={`line`}>
  
        <LinePath
          curve={curveNatural}
          data={scaledData}
          x={d => x(d)}
          y={d => y(d)}
          stroke="#3100F5"
          strokeWidth={2}
          strokeOpacity={1}
          // shapeRendering="geometricPrecision"
        />
      </Group>
    </svg>
  );
};

MiniChart.propTypes = {};

MiniChart.defaultProps = {};

export default MiniChart;
