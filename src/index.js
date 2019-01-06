import './scss/app.scss';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Toolbar from './components/Toolbar';

class App extends React.Component {
	render() {
		return(
			<Fragment>
				<Toolbar></Toolbar>
				<div className="editor" contentEditable="true">
				</div>
			</Fragment>
		); 
	}
}

ReactDOM.render(<App />, document.getElementById('app'));