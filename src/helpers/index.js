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
    "icon": "palette",
    "choiceType": "colors",
    "choices": ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"]
  }
};

// document.cookie="dev_console=true; max-age=(60*60*24);"
const dev_console = getCookie("dev_console");
export function logMsg(...msgs) { // hide all console msgs behind a cookie
  if(dev_console) {
    console.log("[DEV CONSOLE MSG]: ", ...msgs);
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}