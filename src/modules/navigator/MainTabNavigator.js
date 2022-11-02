import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {ScreenNames} from '../../general/constants/ScreenNames';
import HomeScreen from '../screens/HomeScreen';
import SearchingScreen from '../screens/SearchingScreen';
import StudyingScreen from '../screens/StudyingScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import AccountScreen from '../screens/AccountScreen';
import Icon from 'react-native-vector-icons/Ionicons';

import {View, Image} from 'react-native';

const Tab = createBottomTabNavigator();
export default function MainTabNavigator(props) {
  return (
    <Tab.Navigator scenceContainerStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              size={25}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? '#1877f2' : '#272727'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tìm kiếm"
        component={SearchingScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              size={25}
              name={focused ? 'search' : 'search-outline'}
              color={focused ? '#1877f2' : '#272727'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Vào học"
        component={StudyingScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              size={25}
              name={focused ? 'book' : 'book-outline'}
              color={focused ? '#1877f2' : '#272727'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Yêu thích"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              size={25}
              name={focused ? 'heart' : 'heart-outline'}
              color={focused ? '#1877f2' : '#272727'}
            />
          ),
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              size={25}
              name={focused ? 'person' : 'person-outline'}
              color={focused ? '#1877f2' : '#272727'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
