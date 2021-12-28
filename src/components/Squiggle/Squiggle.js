import React from 'react';
import {useRef, useEffect, useState, createRef} from 'react';
import PropTypes from 'prop-types';
// import * as d3 from 'd3';
import styles from './Squiggle.module.scss';
import colors from '../../utilities/_export.module.scss';

function plotSine(ctx, xOffset, yOffset, startColour, endColour, gradientHeightMultiplier) {
    var width = ctx.canvas.width;
    var height = ctx.canvas.height / gradientHeightMultiplier;
    var scale = 1;

    let grd = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    grd.addColorStop(0, startColour);
    grd.addColorStop(1, endColour);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, width, ctx.canvas.height);


    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // ctx.fillStyle = "#907be8";
    ctx.strokeStyle = "#ffffff"; 
    ctx.fillStyle = "#ffffff";

    // console.log("Drawing point...");
    // drawPoint(ctx, yOffset+step);
    
    var x = 0;
    var y = height/2 - (5/6 * height) * Math.sin((x+xOffset)/frequency);
    var setPoints = [
      [0, -500/600 * height],
      [600, -250/600 * height],
      [900, -100/600 * height],
      [1250, 110/600 * height],
      [1600, 275/600 * height],
      [1920, 550/600 * height],
    ];
    var amplitudes = [];
    for (let i=0; i < setPoints.length - 1; i++) {
      let m = (setPoints[i + 1][1] - setPoints[i][1]) / (setPoints[i + 1][0] - setPoints[i][0]);
      amplitudes.push({
        start: setPoints[i][0],
        end: setPoints[i + 1][0],
        m: m,
        b: setPoints[i][1] - m * setPoints[i][0],
      })
    }
    var frequency = 200;

    while (x < width) {
        for (let a of amplitudes) {
          if (x >= a.start && x <= a.end) {
            y = height/2 - (a.m * x + a.b) / 2 * Math.sin((x+xOffset)/frequency);
            ctx.lineTo(x, y);
            // ctx.strokeStyle = "#F5F2FE";
            ctx.lineTo(x, 0);
            // ctx.strokeStyle = "#907be8";
            ctx.moveTo(x, y);
            x += 0.5;
            break;
          }
        }
        // console.log("x="+x+" y="+y);
    }
    ctx.stroke();
    x = 4;
    y = height/2 + (5/6 * height) / 2 * Math.sin((x+xOffset)/frequency);
    //ctx.moveTo(x, y);
    ctx.strokeStyle = "#907be8";
    ctx.beginPath()
    ctx.moveTo(x, y);

    while (x < width) {
        for (let a of amplitudes) {
          if (x >= a.start && x <= a.end) {
            y = height/2 - (a.m * x + a.b) / 2 * Math.sin((x+xOffset)/frequency);
            ctx.lineTo(x, y);
            // ctx.strokeStyle = "#F5F2FE";
            // ctx.lineTo(x, height);
            // ctx.strokeStyle = "#907be8";
            // ctx.moveTo(x, y);
            x++;
            break;
          }
        }
        // console.log("x="+x+" y="+y);
    }
    ctx.stroke();
    // ctx.moveTo(x, y);
    

    ctx.strokeStyle = "#907be8";
    // console.log("Drawing point at y=" + y);
    const d = 1920 / 6;
    for (let p of setPoints) {

      ctx.beginPath();
      ctx.arc(p[0], height/2 - p[1] / 2 * Math.sin((p[0]+xOffset)/frequency), 12, 0, 2 * Math.PI);
      
      
      ctx.fill();
      ctx.stroke();
    }
    
    ctx.save();
    ctx.restore();

} 

const Squiggle = (props) => {
  const ref = useRef();
  const containerRef = useRef();
  const [count, setCount] = React.useState(0);
  // const [points, setPoints] = useState([]);
  // const [links, setLinks] = useState([]);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  // const width = 1920;
  // const height = 

  const draw = (canvas, step) => {
    // console.log(step);
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.save();            
    
    plotSine(context, step, 50, props.start, props.end, props.gradientHeight);
    context.restore();
    
  }

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount(prevCount => {
        draw(ref.current, prevCount);
        return prevCount + deltaTime / 20;
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }
  
  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once
  // if (ref.current) {
  //   console.log(ref.current.offsetWidth);
  // }
  return (
    <div className={styles.Container} ref={containerRef} style={{height: (ref.current ? ref.current.offsetWidth : 1920) / 1920 * (412 * props.gradientHeight)}}>
      <canvas className={styles.Squiggle} ref={ref} width="1920" height={412 * props.gradientHeight}></canvas>
    </div>
  )
};

Squiggle.propTypes = {};

Squiggle.defaultProps = {};

export default Squiggle;
