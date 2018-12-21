import React, {Component} from 'react';
import {createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import reducers from './reducers';
import Navigation from './Navigation';


export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store = {store}>
          <Navigation />
      </Provider>
    );
  }
}
