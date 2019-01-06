import React from 'react';

const ToolBtn = props => {
  const {action, btnSymbol} = props;
  return (
    <button onClick={() => {document.execCommand(action, false, '')}}>
      <i className={`fas fa-${btnSymbol}`}></i>
    </button>
  );
}

export default ToolBtn;
