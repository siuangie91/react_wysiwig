import React, { Component } from 'react';

import { logMsg } from './../../helpers';

import ColorSet from './ColorSet';

class ToolBtn extends Component {
  constructor() {
    super();

    this.state = {
      showSelect: false
    }
  }

  isObject = (thing) => {
    return typeof thing === "object";
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
      <ColorSet colors={colors}
        cmdHandler={this.styleText} />
    );
  }

  renderChoices = (choiceType, choices) => {
    if(choiceType === "colors") {
      return this.renderColors(choices);
    }
  }

  renderChoiceSet = (btnType) => {
    if(this.isObject(btnType)) {
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
    const btnSymbol = (this.isObject(btnType)) ? btnType.icon : this.props.btnSymbol;

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
