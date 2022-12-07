import React from 'react';

import {NavigationContainer, StackActions} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

import MainTabNavigator from './MainTabNavigator';
import {ScreenNames} from '../../general/constants/ScreenNames';
import SearchingScreen from '../screens/SearchingScreen';
import StudyingScreen from '../screens/StudyingScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import AccountScreen from '../screens/AccountScreen';
//
import UpdateProfileView from '../views/UpdateProfileView';
import ChangePasswordView from '../views/ChangePasswordView';
import NotificationView from '../views/NotificationView';
import StudyPathView from '../views/StudyPathView';
import CustomerSupportView from '../views/CustomerSupportView';
import RateAppView from '../views/RateAppView';
//
import CategoryView from '../views/CategoryView';
import CourseView from '../views/CourseView';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.mainTab}
            component={MainTabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{presentation: 'modal', animation: 'slide_from_right'}}
        >
          <Stack.Screen
            name={ScreenNames.updateProfileView}
            component={UpdateProfileView}
            headerShown={true}
          />
          <Stack.Screen
            name={ScreenNames.changePasswordView}
            component={ChangePasswordView}
          />
          <Stack.Screen
            name={ScreenNames.notificationView}
            component={NotificationView}
          />
          <Stack.Screen
            name={ScreenNames.studyPathView}
            component={StudyPathView}
          />
          <Stack.Screen
            name={ScreenNames.customerSupportView}
            component={CustomerSupportView}
          />
          <Stack.Screen
            name={ScreenNames.rateAppView}
            component={RateAppView}
          />

          <Stack.Screen
            name={ScreenNames.categoryView}
            component={CategoryView}
          />
          <Stack.Screen name={ScreenNames.courseView} component={CourseView} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
