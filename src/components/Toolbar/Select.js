import React, { Component } from 'react';

import { logMsg } from './../../helpers';

class Select extends Component {
  constructor() {
    super();

    this.state = {
      showSelect: false
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return (
        {
          showSelect: !prevState.showSelect
        }
      );
    });
  }

  render() {
    const hiddenClassName = this.state.showSelect ? "" : "hidden";
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];
    
    return (
      <button onClick={this.handleClick}>
        <i className="fas fa-palette"></i>
        <div className={`choice-set ${hiddenClassName}`}>
          <ul>
            {
              colors.map((color, i) => {
                return (
                  <li key={i} style={{backgroundColor: `${color}`}}
                    onClick={() => {
                      document.execCommand("foreColor", false, color);
                    }}>
                    &nbsp;</li>
                );
              })
            }
          </ul>
        </div>
      </button>
    );
  }
}

export default Select;
