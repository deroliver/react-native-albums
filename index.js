import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header.js';

const App = () => (
  <Header headerText={'Albums'}/>
);

AppRegistry.registerComponent('albums', () => App);