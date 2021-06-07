import React from 'react';
import {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import styles from './Squiggle.module.scss';
import colors from '../../utilities/_export.module.scss';

const Squiggle = () => {
  const ref = useRef(null);
  // const [points, setPoints] = useState([]);
  // const [links, setLinks] = useState([]);
  useEffect(() => {
    // const nodeData = [];
    const host = d3.select(ref.current);
    const points = [];
    for (let i=0; i < 7; i++) {
      points.push({"id": i, "position": [1920 / 6 * i, 480 - 75 * i], "parentPosition": [1920 / 6 * Math.max(i - 1, 0), 480 - 75 * Math.max(i - 1, 0)]})
      // const point = host.append("circle").attr("r", 3).attr("cx", 50 * i).attr("cy", 90).attr("fill", colors.primary);
      
      // points.push(point);
      // if (i > 0) {
      //   // console.log(points[i].attr("cx"));
      //   let link = d3.linkVertical().target([points[i].attr("cx"), points[i].attr("cx")]).source([points[i - 1].attr("cx"), points[i - 1].attr("cx")]);
      //   host.append("path").attr("d", link);
      // }
    }
    var link = d3.linkHorizontal()
        .source( d => [d.position[0], d.position[1]] )
        .target( d => [d.parentPosition[0], d.parentPosition[1]] );
    console.log(points);
    host.selectAll("path").data(points).join("path").attr("d", link).attr("stroke", colors.black).attr("stroke-width", 1).attr("fill", "none");
    host.selectAll("circle").data(points).join("circle").attr("cx", d => d.position[0]).attr("cy", d => d.position[1]).attr("r", 12.5).attr("fill", colors.primary).classed("circle", true);

    const updatePoints = () => {
      for (let i=0; i < 7; i++) {
        points[i]["position"][1] = Math.min(Math.max(Math.floor(Math.random() * 120) - 60 + points[i]["position"][1], 20), 480);
        points[i]["parentPosition"][1] = points[Math.max(i - 1, 0)]["position"][1];
        // const point = host.append("circle").attr("r", 3).attr("cx", 50 * i).attr("cy", 90).attr("fill", colors.primary);
        
        // points.push(point);
        // if (i > 0) {
        //   // console.log(points[i].attr("cx"));
        //   let link = d3.linkVertical().target([points[i].attr("cx"), points[i].attr("cx")]).source([points[i - 1].attr("cx"), points[i - 1].attr("cx")]);
        //   host.append("path").attr("d", link);
        // }
      }
      host.selectAll("path").data(points).join("path").transition().ease(d3.easeLinear).duration(4000).attr("d", link );
      host.selectAll("circle").data(points).join("circle").transition().ease(d3.easeLinear).duration(4000).attr("cy", d => d.position[1]);
      setTimeout(() => updatePoints(), 4000);
    }
    
    updatePoints();
    
  }, []);
  const viewBoxWidth = 1920;
  const viewBoxHeight = 500;
  return (
    <svg ref={ref} width="100%" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
    </svg>
  )
};

Squiggle.propTypes = {};

Squiggle.defaultProps = {};

export default Squiggle;
