import React from 'react';

const ToolBtn = props => {
  const {action, btnText} = props;
  return (
    <button onClick={() => {document.execCommand(action, false, '')}}>
      {btnText}
    </button>
  );
}

export default ToolBtn;
