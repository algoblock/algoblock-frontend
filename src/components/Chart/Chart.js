import React from 'react';
import {useState, useCallback, useRef, useEffect} from 'react';
import {curveLinear} from '@visx/curve';
import { Group } from '@visx/group';
import { Area, Bar, Line } from '@visx/shape';
import { Brush } from '@visx/brush';
import { Bounds } from '@visx/brush/lib/types';
import BaseBrush, { BaseBrushState, UpdateBrush } from '@visx/brush/lib/BaseBrush';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';
import { LinearGradient } from '@visx/gradient';
import { useTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';
import { localPoint } from '@visx/event';

import { bisector } from 'd3-array';

import dayjs from 'dayjs';

import PropTypes from 'prop-types';
import styles from './Chart.module.scss';
import colors from '../../utilities/_export.module.scss';



const width = 500;
const height = 75;
const data = []
let last = 10000
let initialDate = dayjs().subtract(7, 'day');
let date = dayjs(initialDate);
for (let i=0; i < 1440 * 7; i++) {
  
  let newPrice = Math.max(0, last + (Math.random() * 8  - 3.5) * Math.pow((Math.random() * 8  - 3.5), 5));
  
  // console.log(initialDate.date());
  
  data.push([date, newPrice]);
  last = data[data.length - 1][1]
  date = date.add(1, 'minute')
}



// console.log(data)
const x = d => d[0];
const y = d => d[1];

const bisectDate = bisector((d) => x(d)).left;




const tooltipStyles = {
  ...defaultStyles,
  background: colors.dark + "80",
  border: '1px solid white',
  color: 'white',
};

const defaultMargin = { top: 40, right: 30, bottom: 50, left: 70 };

const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };
const chartSeparation = 30;
const selectedBrushStyle = {
  fill: "#ffffff33",
  stroke: 'white',
  strokeWidth: 1,
  shapeRendering: "crispEdges",
};


const Chart = ({width, height, margin=defaultMargin }) => {
  const {showTooltip, hideTooltip, tooltipData, tooltipLeft, tooltipTop} = useTooltip();
  const brushHeight = 40;
  const separation = -10;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom - brushHeight - separation;
  
  const brushRef = useRef(null);
  const [filteredData, setFilteredData] = useState(data);

  const onBrushChange = (domain) => {
    if (!domain) return;
    console.log(domain)
    const { x0, x1, y0, y1 } = domain;
    const dataCopy = data.filter((s) => {
      const curX = x(s);
      const curY = y(s);
      return curX > x0 && curX < x1 && curY > y0 && curY < y1;
    });
    setFilteredData(dataCopy);
  };

  const xScale = scaleTime({
    domain: [Math.min(...filteredData.map(x)), Math.max(...filteredData.map(x))],
    range: [0, xMax],
  });

  const yScale = scaleLinear({
    round: true,
    nice: true,
    domain: [0, Math.max(...filteredData.map(y))],
    range: [yMax, 0],
  });

  const xScaleBrush = scaleTime({
    domain: [Math.min(...data.map(x)), Math.max(...data.map(x))],
    range: [0, xMax],
  });

  const yScaleBrush = scaleLinear({
    round: true,
    nice: true,
    domain: [0, Math.max(...data.map(y))],
    range: [brushHeight, 0],
  });

  const initialBrushPosition = {
    start: { x: xScaleBrush(x(data[0])) },
    end: { x: xScaleBrush(x(data[data.length - 1])) },
  }

  useEffect(() => {
    onBrushChange({x0: 0, x1: Math.max(...filteredData.map(x)), y0: 0, y1: Math.max(...data.map(y))});
  }, [])


  const handleTooltip = useCallback(
      (event: React.TouchEvent | React.MouseEvent) => {
        const point = localPoint(event) || { x: 0 };
        const adjustedX = point.x - margin.left;
        const x0 = xScale.invert(adjustedX);
        const index = bisectDate(data, x0, 1);
        const d0 = data[index - 1];
        const d1 = data[index];
        let d = d0;
        if (d1 && x(d1)) {
          d = x0.valueOf() - x(d0).valueOf() > x(d1).valueOf() - x0.valueOf() ? d1 : d0;
        }
        showTooltip({
          tooltipData: d,
          tooltipLeft: adjustedX,
          tooltipTop: yScale(y(d)),
        });
      },
      [showTooltip, yScale, xScale],
    );

  

  console.log(Math.max(...data.map(y)))
  console.log(Math.min(...data.map(y)))

  // let scaledData = []

  // for (let i=0; i < 32; i++) {
  //   // console.log(yScale(y(data[i])))
  //   scaledData.push([xScale(data[i][0]), yScale(data[i][1])]);
  // }

  // console.log(scaledData);

  // console.log(Math.max(...scaledData.map(y)))
  // console.log(Math.min(...scaledData.map(y)))
  return (
    <div className={styles.Chart}>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          {/*<LinearGradient id="stroke-gradient" from={colors.primary} to={colors.primaryLight} />*/}
          <GridRows scale={yScale} width={xMax} height={yMax} stroke={colors.cottonwoodGray} />
          {/*<GridColumns scale={xScale} width={xMax} height={yMax} stroke={colors.cottonwoodGray} />*/}
          
          
          <Area
            id={`${Math.random()}`}
            data={filteredData}
            x={(d) => xScale(x(d))}
            y={(d) => yScale(y(d))}
            curve={curveLinear}
            stroke={colors.primary}
          />
          <Group top={height - brushHeight - margin.top}>
            <Area
              id={`${Math.random()}`}
              data={data}
              x={(d) => xScaleBrush(x(d))}
              y={(d) => yScaleBrush(y(d))}
              curve={curveLinear}
              stroke={colors.primary}
              top={height - separation}
            />
            <line x1={xMax} x2={xMax} y1={0} y2={brushHeight} shapeRendering="crispEdges" strokeWidth={1} stroke="#ffffff33" />
            <line x1={0} x2={0} y1={0} y2={brushHeight} shapeRendering="crispEdges" strokeWidth={1} stroke="#ffffff33" />
            <line x1={0} x2={xMax} y1={0} y2={0} shapeRendering="crispEdges" strokeWidth={1} stroke="#ffffff33" />
            <line x1={0} x2={xMax} y1={brushHeight} y2={brushHeight} shapeRendering="crispEdges" strokeWidth={1} stroke="#ffffff33" />
            <Brush
              xScale={xScaleBrush}
              yScale={yScaleBrush}
              width={xMax}
              height={brushHeight}
              handleSize={8}
              innerRef={brushRef}
              resizeTriggerAreas={['left', 'right']}
              brushDirection="horizontal"
              margin={defaultMargin}
              initialBrushPosition={initialBrushPosition}
              onChange={onBrushChange}
              onClick={() => setFilteredData(data)}
              selectedBoxStyle={selectedBrushStyle}
              useWindowMoveEvents
            />
            
          </Group>
          
           
          <Bar
            width={xMax}
            height={yMax}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />

          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: 0 }}
                to={{ x: tooltipLeft, y: yMax }}
                stroke={colors.primary}
                opacity={0.5}
                strokeWidth={2}
                pointerEvents="none"
                strokeDasharray="5,2"
              />
              {/*<circle
                cx={tooltip.tooltipLeft}
                cy={tooltip.tooltipTop + 1}
                r={4}
                fill="black"
                fillOpacity={0.1}
                stroke="black"
                strokeOpacity={0.1}
                strokeWidth={2}
                pointerEvents="none"
              />*/}
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill={colors.violet}
                stroke={colors.primary}
                strokeWidth={2}
                pointerEvents="none"
              />
            </g>
          )}
          <AxisBottom 
          stroke="#ffffff" 
          top={yMax} 
          scale={xScale} 
          tickStroke="#ffffff"
          tickLabelProps={() => ({
            fill: "#ffffff",
            fontSize: 11,
            textAnchor: 'middle',
          })}
          

          />
          <line x1={xMax} x2={xMax} y1={0} y2={yMax} fill="#ffffff" shapeRendering="crispEdges" stroke="#ffffff" />
          <AxisLeft 
          scale={yScale}
          label="USD"
          labelOffset={48}
          labelProps={{
            fill: "#ffffff",
            fontSize: 11,
          }}
          stroke="#ffffff" 
          tickLabelProps={() => ({
            fill: "#ffffff",
            fontSize: 11,
            textAnchor: 'end',
          })}
           />
        </Group>
      </svg>
      {tooltipData && (
          <div>
            <TooltipWithBounds
              key={Math.random()}
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={tooltipStyles}
            >
              {`$${y(tooltipData).toFixed(2)}`}
            </TooltipWithBounds>
            <Tooltip
              top={height - separation - brushHeight - margin.top - 32}
              left={tooltipLeft + margin.left}
              style={{
                ...defaultStyles,
                minWidth: 72,
                textAlign: 'center',
                transform: 'translateX(-50%)',
              }}
            >
              {x(tooltipData).format('DD/MM/YYYY')}
            </Tooltip>
          </div>
        )}
    </div>
  );
};

Chart.propTypes = {};

Chart.defaultProps = {};

export default Chart;
