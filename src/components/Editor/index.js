import React, { Component } from 'react';

class Editor extends Component {
  render() {
    return (
      <div className="editor" contentEditable="true"></div>
    );
  }
}

export default Editor;