import React from 'react';

const DefaultBtn = props => {
  return (
    <button onClick={() => {document.execCommand(action, false, '')}}>
      <i className={`fas fa-${btnSymbol}`}></i>
    </button>
  )
}
