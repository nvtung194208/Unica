import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {ScreenNames} from '../../general/constants/ScreenNames';
import HomeScreen from '../screens/HomeScreen';
import SearchingScreen from '../screens/SearchingScreen';
import StudyingScreen from '../screens/StudyingScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import AccountScreen from '../screens/AccountScreen';
// const MainTabBarIcons = {
//      HomeTab: {
//        icon: [AppIcons.news_feed, AppIcons.news_feed_selected],
//      },
//    }; 

const Tab = createBottomTabNavigator();
export default function MainTabNavigator(props) {
  return (
    <Tab.Navigator initialRouteName={ScreenNames.homeScreen}>
      <Tab.Screen
        name={ScreenNames.homeScreen}
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
        }}
      />
      <Tab.Screen
        name={ScreenNames.searchingScreen}
        component={SearchingScreen}
        options={{
          title: 'Tìm kiếm',
        }}
      />
      <Tab.Screen
        name={ScreenNames.studyingScreen}
        component={StudyingScreen}
        options={{
          title: 'Vào học',
        }}
      />
      <Tab.Screen
        name={ScreenNames.favouriteScreen}
        component={FavouriteScreen}
        options={{
          title: 'Yêu thích',
        }}
      />
      <Tab.Screen
        name={ScreenNames.accountScreen}
        component={AccountScreen}
        options={{
          title: 'Tài khoản',
        }}
      />
      
    </Tab.Navigator>
  );
}
