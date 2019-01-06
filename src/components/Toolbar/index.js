import React from 'react';

import ToolBtn from './ToolBtn';

import {ToolbarConfig} from './../../helpers';

const Toolbar = props => {
  return (
    <div className="toolbar">
      {
        Object.keys(ToolbarConfig).map((cmd, i) => {
          return (
            <ToolBtn key={i} 
              action={cmd} 
              btnSymbol={ToolbarConfig[cmd]}/>
          );
        })
      }
    </div>
  );
}

export default Toolbar;