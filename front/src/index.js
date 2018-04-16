import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
    <App />
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
