import React from 'react';

import ToolBtn from './ToolBtn';
import Select from './Select';

import { ToolbarConfig } from './../../helpers';

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
      
      <Select />
      
      {/* <button onClick={() => {document.execCommand("foreColor", false, "#ff0000")}}>
      </button> */}
    </div>
  );
}

export default Toolbar;