# Simple WYSIWIG built on React

### Overview
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

const ToolbarConfig = {
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

### Setup
If you'd like to run this project locally, clone the project and then
 1. `npm install`
 2. `npm start`

I kept my console messages in there because I like to keep a record of what my thought process was. However, I have put all these messages behind a cookie that expires after 24 hours so that not everyone can see them (unless you're reading this, of course :wink:). If you'd like to see the messages, run
```javascript
document.cookie="dev_console=true;"
```
in the console. Then refresh the page. Check the console again to see the messages! 

Enhanced console logger is found in `src/helpers/index.js`:
```javascript
export function logMsg(...msgs) { // hide all console msgs behind a cookie
  if(dev_console) {
    console.log("[DEV CONSOLE MSG]: ", ...msgs);
  }
  // do nothing if no cookie!
}
```
