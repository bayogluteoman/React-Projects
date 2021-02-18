import React from 'react';
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from '../progressBar/AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";
import { Bars, Java, React, C, Native } from './progressBar.styles';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";

  
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

      <Java> Java</Java>
      <React>React</React>
      <C>C#</C>
      <Native>React Native</Native>

      </Bars>

);

export default Progressbar;