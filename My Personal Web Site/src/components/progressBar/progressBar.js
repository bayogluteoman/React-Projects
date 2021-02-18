import React from 'react';
import styled from 'styled-components';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import AnimatedProgressProvider  from './AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";

const Bars = styled.div`
  display: grid;
  grid-template-columns: 5em 5em 5em 5em;
  grid-template-rows: 6em 2.5em;
  gap: 0em 1em;
  justify-content: center;
`;


  
const Progressbar = () => (
    <Bars>
    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={51}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ 
                  pathTransition: "none",
                  textColor: '#FF7F11',
                  pathColor:'#FF7F11',
                 })}
            />
            
          );
        }}
      </AnimatedProgressProvider>

      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={33}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ 
                pathTransition: "none",
                textColor: '#98CE00',
                pathColor:'#98CE00',
               })}
            />

            
          );
        }}
      </AnimatedProgressProvider>   

      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={26}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ 
                pathTransition: "none",
                textColor: '#AA0E2D',
                pathColor:'#AA0E2D'
               })}
            />

            
          );
        }}
      </AnimatedProgressProvider> 

      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={44}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ 
                pathTransition: "none",
                textColor: '#7E33FF',
                pathColor:'#7E33FF'
               })}
            />
            
          );
        }}
      </AnimatedProgressProvider> 

      <div style={{ color: '#FF7F11', fontSize: '1.3rem', textAlign: 'center'}}>Java</div>
      <div style={{ color: '#98CE00', fontSize: '1.3rem', textAlign: 'center'}}>React</div>
      <div style={{ color: '#AA0E2D', fontSize: '1.3rem', textAlign: 'center'}}>C#</div>
      <div style={{ color: '#7E33FF', fontSize: '1rem', textAlign: 'center'}}>React Native</div>

      </Bars>

);

export default Progressbar;