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
    const newChildNodeLength = editor.childNodes.length;
    this.setState(prevState => {
      if(prevState.numChildNodes !== newChildNodeLength) {
        logMsg('updated child node length', newChildNodeLength);
        let hasContent = prevState.hasContent;

        if(newChildNodeLength) {
          if(this.state.hasContent) {
            logMsg('leaving hasContent at true!');
          }
          else {
            logMsg('setting hasContent to true!');
            hasContent = true;
          }
        }
        else {
          logMsg('setting to false');
          hasContent = false;
        }
        
        return { 
          numChildNodes: newChildNodeLength,
          hasContent: hasContent
        };
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