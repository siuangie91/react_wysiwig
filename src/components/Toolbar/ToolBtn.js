import React, { Component } from 'react';

import { logMsg } from './../../helpers';

class ToolBtn extends Component {
  constructor() {
    super();

    this.state = {
      showSelect: false
    }
  }

  styleText = (action, valueArg = "") => {
    document.execCommand(action, false, valueArg);
  }

  toggleChoices = () => {
    this.setState(prevState => {
      return (
        { showSelect: !prevState.showSelect }
      )
    });
  }

  renderColors = (colors) => {
    return (
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
    );
  }

  renderChoices = (choiceType, choices) => {
    if(choiceType === "colors") {
      return this.renderColors(choices);
    }
  }

  renderChoiceSet = (btnType) => {
    if(typeof btnType === "object") {
      const {choiceType, choices} = btnType;
      const hiddenClassName = this.state.showSelect ? "" : "hidden";

      return (
        <div className={`choice-set choice-set-${choiceType} ${hiddenClassName}`}>
          {this.renderChoices(choiceType, choices)}
        </div>
      );
    }
    return "";
  }

  render() {
    const {action, btnType} = this.props;
    const btnSymbol = (typeof btnType === "object") ? btnType.icon : this.props.btnSymbol;

    return (
      <button onClick={() => {
        if(btnType === "default-btn") {
          this.styleText(action);
        }
        else {
          this.toggleChoices();
        }  
      }}>
        <i className={`fas fa-${btnSymbol}`}></i>
        {this.renderChoiceSet(btnType)}
      </button>
    );
  }
};

export default ToolBtn;
