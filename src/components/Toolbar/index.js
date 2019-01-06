import React from 'react';

import ToolBtn from './ToolBtn';

const Toolbar = props => {
  return (
    <div className="toolbar">
      <ToolBtn action="bold" btnText="B" />
      <ToolBtn action="italic" btnText="I" />
      <ToolBtn action="underline" btnText="U" />
    </div>
  );
}

export default Toolbar;