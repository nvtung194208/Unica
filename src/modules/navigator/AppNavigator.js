import React from 'react';

import {NavigationContainer, StackActions} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

import AccontScreen from '../screens/AccountScreen';

import MainTabNavigator from './MainTabNavigator';
import {ScreenNames} from '../../general/constants/ScreenNames';
import SearchingScreen from '../screens/SearchingScreen';
import StudyingScreen from '../screens/StudyingScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import AccountScreen from '../screens/AccountScreen';
import UpdateProfileView from '../views/UpdateProfileView';

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.mainTab}
            component={MainTabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.homeScreen}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.searchingScreen}
            component={SearchingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.studyingScreen}
            component={StudyingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.favouriteScreen}
            component={FavouriteScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name={ScreenNames.accountScreen}
            component={AccountScreen}
            options={{headerShown: false}}
          />
        </Stack.Group>

        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="Update Profile View"
            component={UpdateProfileView}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
