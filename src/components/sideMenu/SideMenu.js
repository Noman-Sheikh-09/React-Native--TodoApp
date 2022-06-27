import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {style} from './SideMenuStyle';
import UseSideMenu from './UseSideMenu';
import Avatar from '../../assets/avatar.png';
export default function SideMenu(props) {
  const [logoutHandler] = UseSideMenu();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <Image
            source={Avatar}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              marginTop: 30,
              marginLeft: 30,
            }}
          />
        </View>
        <View style={style.logoutContainer}>
          <TouchableOpacity
            style={{display: 'flex', flexDirection: 'row'}}
            onPress={logoutHandler}>
            {/* <Icon name="logout-variant" size={30} color={"#FF6347"} /> */}
            <Text style={{fontSize: 20, marginLeft: 10, color: '#800080'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
