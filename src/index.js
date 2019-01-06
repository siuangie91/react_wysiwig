import './scss/app.scss';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return(
			<Fragment>
				<div className="toolbar">
					<button onClick="document.execCommand('underline', false, '');">Underline</button>
					<button onClick="document.execCommand('italic', false, '');">Italic</button>
					<button onClick="document.execCommand('bold', false, '');">Bold</button>
				</div>
				<div className="editor" contentEditable="true">
				</div>
			</Fragment>
		); 
	}
}

ReactDOM.render(<App />, document.getElementById('app'));