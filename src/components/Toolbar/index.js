import React from 'react';

import ToolBtn from './ToolBtn';

const Toolbar = props => {
  return (
    <div className="toolbar">
      <ToolBtn action="bold" btnSymbol="bold" />
      <ToolBtn action="italic" btnSymbol="italic" />
      <ToolBtn action="underline" btnSymbol="underline" />
    </div>
  );
}

export default Toolbar;