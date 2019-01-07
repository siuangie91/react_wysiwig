# Simple WYSIWIG built on React

Basic WYSIWIG editor. The main idea is that you can customize the toolbar to your liking using a config file. Config file is designed to be flexible enough to take
* simple commands, like `bold` and `italic`, and
* more complex commands, like changing the color (`foreColor`).

See `src/config/ToolbarConfig.js`:
```javascript
/*
REFERENCES:
- Commands: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Commands
- Font Awesome classes: https://fontawesome.com/icons?d=gallery
*/

export const ToolbarConfig = {
  // "commandName": "font-awesome-class"
  "bold": "bold",
  "italic": "italic",
  .
  .
  .
  "foreColor": {
    "type": "choiceSet",
    "icon": "palette",
    "choiceType": "colors",
    "choices": ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"]
  }
  .
  .
  .
};
```

Reference https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Commands for commands.