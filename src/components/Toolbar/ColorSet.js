import React from 'react';
import {logMsg} from './../../helpers';

const ColorSet = props => {
  const {colors, cmdHandler} = props;
  
  return (
    <ul>
      {
        colors.map((color, i) => {
          return (
            <li key={i} style={{backgroundColor: `${color}`}}
              onClick={() => {
                cmdHandler("foreColor", color)
              }}>
              &nbsp;</li>
          );
        })
      }
    </ul>
  );
};

export default ColorSet;