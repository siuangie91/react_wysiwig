import React from 'react';

import ToolBtn from './ToolBtn';
import ToolbarConfig from './../../config/ToolbarConfig';

const Toolbar = props => {
  const getBtnType = (key) => {
    if(typeof ToolbarConfig[key] === "object") {
      return ToolbarConfig[key];
    }
    return "default-btn";
  };

  return (
    <div className="toolbar">
      {
        Object.keys(ToolbarConfig).map((cmd, i) => {
          return (
            <ToolBtn key={i} 
              action={cmd} 
              btnSymbol={ToolbarConfig[cmd]}
              btnType={getBtnType(cmd)} />
          );
        })
      }
    </div>
  );
}

export default Toolbar;