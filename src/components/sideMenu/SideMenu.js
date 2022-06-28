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
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              padding: 20,
              color: '#800080',
            }}>
            Welcome!
          </Text>
        </View>
        <View style={style.logoutContainer}>
          <TouchableOpacity
            style={{display: 'flex', flexDirection: 'row'}}
            onPress={logoutHandler}>
            {/* <Icon name="logout-variant" size={30} color={"#FF6347"} /> */}
            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
                color: 'white',
                backgroundColor: '#800080',
                paddingLeft: 20,
                paddingRight: 20,
                padding: 10,
                borderRadius: 30,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
