import * as React from 'react';
import {Provider} from 'react-redux'
import Store from './src/config/Store'
import StackNavigation from './src/navigation/StackNavigation';
export default function App() {

  return (

  <Provider store = {Store}>
  <StackNavigation />
  </Provider>

  );
}
