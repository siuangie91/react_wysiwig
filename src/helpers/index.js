/*
REFERENCES:
- Commands: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Commands
- Font Awesome classes: https://fontawesome.com/icons?d=gallery
*/

export const ToolbarConfig = {
  // "commandName": "font-awesome-class"
  "undo": "undo",
  "redo": "redo" ,
  "bold": "bold",
  "italic": "italic",
  "underline": "underline",
  "strikethrough": "strikethrough",
  "delete": "trash",
  "justifyLeft": "align-left",
  "justifyCenter": "align-center",
  "justifyRight": "align-right",
  "foreColor": {
    "type": "choiceSet",
    "choices": ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"]
  }
};

// make color picker a "dropdown" -- 
// contain an array of hex colors
// render each color as a btn
// btn on click --> change color