import React from 'react';
import StackNavigation from './StackNavigation'
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../components/sideMenu/SideMenu';
export default function Navigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props=><SideMenu {...props} />} screenOptions={{headerShown:false}}>

    <Drawer.Screen name="StackNavigation" component={StackNavigation} />

  </Drawer.Navigator>
  );
}
