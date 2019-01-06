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
      <button onClick={() => {document.execCommand("foreColor", false, "#ff0000")}}>
        <i className="fas fa-palette"></i>
      </button>
    </div>
  );
}

export default Toolbar;