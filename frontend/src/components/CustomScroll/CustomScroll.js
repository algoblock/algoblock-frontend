import React, { useState, useCallback, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import styles from './CustomScroll.module.scss';

const SCROLL_BOX_MIN_WIDTH = 20;

const CustomScroll = ({ children, ...restProps }) => {
  const [hovering, setHovering] = useState(false);
  const [scrollBoxWidth, setScrollBoxWidth] = useState(SCROLL_BOX_MIN_WIDTH);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);
  const [overshoot, setOvershoot] = useState(false);
  // const [wasDragging, setWasDragging] = useState(false);

  const handleMouseOver = useCallback(() => {
    !hovering && setHovering(true);
    // if (wasDragging) {
    //   setDragging(true);
    //   setWasDragging(false);
    // }
  }, [hovering]);

  const handleMouseOut = useCallback(() => {
    !!hovering && setHovering(false);
    // if (isDragging) {
    //   setDragging(false);
    //   setWasDragging(true);
    // }
  }, [hovering]);

  const handleDocumentMouseUp = useCallback(
    e => {
      // console.log("e2");
      if (isDragging) {
        e.preventDefault();
        setDragging(false);
      }
      setOvershoot(false);
      // if (wasDragging) {
      //   setWasDragging(false);
      // }
    },
    [isDragging]
  );

  const handleDocumentMouseMove = useCallback(
    e => {
      
      if (isDragging) {
        // console.log("e1");
        e.preventDefault();
        e.stopPropagation();
        const scrollHostElement = scrollHostRef.current;
        let { scrollWidth, offsetWidth } = scrollHostElement;
        
        scrollWidth = scrollWidth * 0.95;
        offsetWidth = offsetWidth * 0.95;
        let maxWidth = (offsetWidth - scrollBoxWidth) / 0.95;
        // console.log(maxWidth);
        let deltaX = (e.clientX - lastScrollThumbPosition);
        // console.log(scrollBoxTop);
        if (!overshoot) {
          // console.log("deltaX: " + deltaX + " lastThumb: " + lastScrollThumbPosition);
          if (scrollBoxTop + deltaX > maxWidth && scrollBoxTop <= maxWidth) {
            // console.log("too far");
            setOvershoot(true);
            let offset = scrollBoxTop - (offsetWidth - scrollBoxWidth) / 0.95;
            // console.log(offset);
            setScrollThumbPosition(e.clientX + offset);
          } else if (scrollBoxTop + deltaX < 0 && scrollBoxTop >= 0) {
            // console.log("too close");
            setOvershoot(true);
            let offset = scrollBoxTop;
            // console.log(offset);
            setScrollThumbPosition(e.clientX + offset);
          } else if (scrollBoxTop + deltaX >= 0 && scrollBoxTop + deltaX <= maxWidth) {
            // console.log("we good");
            setScrollThumbPosition(e.clientX);
          }
        } else {
          if (scrollBoxTop + deltaX >= 0 && scrollBoxTop + deltaX <= maxWidth) {
            // console.log("we aren't overshooting anymore");
            // console.log("deltaX: " + deltaX + " lastThumb: " + lastScrollThumbPosition);
            setOvershoot(false);
            setScrollThumbPosition(e.clientX);
          }
        }
          
          
        var percentage = deltaX * (scrollWidth / offsetWidth);
        
        setScrollBoxTop(
          Math.min(
            Math.max(0, (scrollBoxTop + deltaX)),
            maxWidth
          )
        );
        // scrollHostElement.scrollLeft = scrollHostElement.scrollLeft + percentage;
        scrollHostElement.scrollLeft = Math.min(
          scrollHostElement.scrollLeft + percentage,
          (scrollWidth - offsetWidth) / 0.95
        );
        
        
      }
    },
    [isDragging, lastScrollThumbPosition, scrollBoxWidth, scrollBoxTop, overshoot]
  );

  const handleScrollThumbMouseDown = useCallback(e => {
    // console.log("e3");
    e.preventDefault();
    e.stopPropagation();
    setScrollThumbPosition(e.clientX);
    setDragging(true);
    // console.log("handleScrollThumbMouseDown");
  }, []);

  const handleScroll = useCallback(() => {
    // console.log("handleScroll");
    if (!scrollHostRef) {
      return;
    }
    const scrollHostElement = scrollHostRef.current;
    let { scrollLeft, scrollWidth, offsetWidth } = scrollHostElement;
    scrollWidth = scrollWidth * 0.95;
    offsetWidth = offsetWidth * 0.95;
    scrollLeft = scrollLeft;
    let newTop =
      (parseInt(scrollLeft, 10) / parseInt(scrollWidth, 10)) * offsetWidth;
    // newTop = newTop + parseInt(scrollTop, 10);
    newTop = Math.min(newTop, (offsetWidth - scrollBoxWidth));
    setScrollBoxTop(newTop);
  }, []);

  const scrollHostRef = useRef();

  useEffect(() => {
    const scrollHostElement = scrollHostRef.current;
    const { clientWidth, scrollWidth } = scrollHostElement;
    // console.log(clientWidth);
    // console.log(scrollWidth);
    const scrollThumbPercentage = clientWidth / scrollWidth;
    const scrollThumbWidth = Math.max(
      scrollThumbPercentage * clientWidth * 0.95,
      SCROLL_BOX_MIN_WIDTH
    );
    // console.log(scrollThumbWidth);
    setScrollBoxWidth(scrollThumbWidth);
    scrollHostElement.addEventListener("scroll", handleScroll, true);
    return function cleanup() {
      scrollHostElement.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  useEffect(() => {
    //this is handle the dragging on scroll-thumb
    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("mouseup", handleDocumentMouseUp);
    document.addEventListener("mouseleave", handleDocumentMouseUp);
    return function cleanup() {
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("mouseup", handleDocumentMouseUp);
      document.removeEventListener("mouseleave", handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);
  // console.log(scrollBoxTop);
  return (
    <div
      className={styles.ScrollhostContainer}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        ref={scrollHostRef}
        className={styles.Scrollhost}
        {...restProps}
      >
        {children}
      </div>
      <div className={styles.ScrollBar} style={{ opacity: hovering || isDragging ? 1 : 1 }}>
        <div
          className={styles.ScrollThumb}
          style={{ width: scrollBoxWidth, left: scrollBoxTop * 0.95 }}
          onMouseDown={handleScrollThumbMouseDown}
        />
      </div>
    </div>
  );
}


export default CustomScroll;