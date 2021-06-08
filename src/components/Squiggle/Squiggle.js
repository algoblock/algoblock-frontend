import React from 'react';
import {useRef, useEffect, useState, createRef} from 'react';
import PropTypes from 'prop-types';
// import * as d3 from 'd3';
import styles from './Squiggle.module.scss';
import colors from '../../utilities/_export.module.scss';

function plotSine(ctx, xOffset, yOffset) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    var scale = 1;

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.fillStyle = colors.primary;

    // console.log("Drawing point...");
    // drawPoint(ctx, yOffset+step);
    
    var x = 4;
    var y = height/2 + amplitude * Math.sin((x+xOffset)/frequency);
    var amplitude = 100;
    var frequency = 200;
    //ctx.moveTo(x, y);
    ctx.moveTo(x, y);
    while (x < width) {
        y = height/2 + amplitude * Math.sin((x+xOffset)/frequency) - x/20 + 50;
        ctx.lineTo(x, y);
        x++;
        // console.log("x="+x+" y="+y);
    }
    ctx.stroke();
    

    // console.log("Drawing point at y=" + y);
    const d = 1920 / 6;
    for (let i=0; i < 7; i++) {
      ctx.beginPath();
      ctx.arc(d * i, height/2 + amplitude * Math.sin((d * i+xOffset)/frequency) - d * i/20 + 50, 12, 0, 2 * Math.PI);
      // ctx.stroke();
      
      ctx.fill();
    }
    
    ctx.save();
    ctx.restore();

} 

const Squiggle = () => {
  const ref = useRef();
  const [count, setCount] = React.useState(0)
  // const [points, setPoints] = useState([]);
  // const [links, setLinks] = useState([]);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const draw = (canvas, step) => {
    console.log(step);
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, 1920, 350);
    context.save();            
    
    plotSine(context, step, 50);
    context.restore();
    
}

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount(prevCount => {
        draw(ref.current, prevCount);
        return prevCount + deltaTime / 10;
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }
  
  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once
  return (
    <canvas className={styles.Squiggle} ref={ref} width="1920" height="350"></canvas>
  )
};

Squiggle.propTypes = {};

Squiggle.defaultProps = {};

export default Squiggle;
