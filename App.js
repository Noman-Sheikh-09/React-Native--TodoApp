import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/config/store';
import StackNavigation from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
    </GestureHandlerRootView>
  );
}
