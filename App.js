import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/config/store';
import StackNavigation from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
