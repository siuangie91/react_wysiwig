import './scss/app.scss';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Toolbar from './components/Toolbar';
import Editor from './components/Editor';

class App extends React.Component {
	render() {
		return(
			<Fragment>
				<Toolbar></Toolbar>
				<Editor></Editor>
			</Fragment>
		); 
	}
}

ReactDOM.render(<App />, document.getElementById('app'));