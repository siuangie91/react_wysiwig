import React, { Component } from 'react';

import { logMsg } from './../../helpers';

class Editor extends Component {
  constructor() {
    super();

    this.state = {
      hasContent: false,
      numChildNodes: 0
    }
  }

  handleInput = (editor) => {
    logMsg('this.state', this.state);
    const newChildNodeLength = editor.childNodes.length;
    this.setState(prevState => {
      if(prevState.numChildNodes === 0) {
        logMsg('prevState was 0 => setting hasContent to true');
        return {
          numChildNodes: newChildNodeLength,
          hasContent: true
        }
      }
      else if(prevState.numChildNodes < newChildNodeLength) {
        logMsg('more nodes now => no need to update hasContent');
      }
      else if(newChildNodeLength === 0) {
        logMsg('empty editor => set hasContent to false');
        return {
          numChildNodes: newChildNodeLength,
          hasContent: false
        }
      }
    });
  }

  render() {
    const isEmptyClassName = this.state.hasContent ? "" : "isEmpty";
    return (
      <div className={`editor ${isEmptyClassName}`} contentEditable="true"
        onInput={e => {
          this.handleInput(e.target);
        }}></div>
    );
  }
}

export default Editor;