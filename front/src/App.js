import React, { Component } from 'react';
import './App.css';
import BitcoinRate from './components/BitcoinRate.js'
import Capital from './components/Capital.js'
import BitcoinGraph from './components/BitcoinGraph.js'
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import rates from './reducers/rates.js';
import capital from './reducers/capital.js';

const appReducers = combineReducers({
  rates,
  capital
})

class App extends Component {
  render() {
    return (
      <Provider store={createStore(appReducers)}>
        <div className="App">
          <AppBar
            title="Virtual Bitcoin Wallet"
            showMenuIconButton={false}
          />
          <BitcoinRate />
          <Capital />
          <Divider />
          <BitcoinGraph />
        </div>
      </Provider>
    );
  }
}

export default App;
