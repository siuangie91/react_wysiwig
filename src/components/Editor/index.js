import React, { Component } from 'react';

import { logMsg } from './../../helpers';

class Editor extends Component {
  constructor() {
    super();

    this.state = {
      hasContent: false
    }
  }

  handleInput = (editor) => {
    logMsg('hasChildNodes', editor.hasChildNodes());
    if(editor.hasChildNodes()) {
      this.setState({ hasContent: true });
    }
    else {
      this.setState({ hasContent: false });
    }
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