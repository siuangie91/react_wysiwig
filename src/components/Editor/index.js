import React, { Component } from 'react';

class Editor extends Component {
  constructor() {
    super();

    this.state = {
      hasContent: false
    }
  }

  handleInput = () => {
    console.log('detected input');
  }

  render() {
    return (
      <div className="editor" contentEditable="true"
        onInput={}></div>
    );
  }
}

export default Editor;