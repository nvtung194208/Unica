import React from 'react';

import {NavigationContainer, StackActions} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainTabNavigator from './MainTabNavigator';
import {ScreenNames} from '../../general/constants/ScreenNames';
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
import ListCourseView from '../views/ListCourseView';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import VideoView from '../views/VideoView';

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
            name={ScreenNames.loginScreen}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.registerScreen}
            component={RegisterScreen}
            options={{headerShown: false}}
          />
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
          <Stack.Screen
            name={ScreenNames.listCourseView}
            component={ListCourseView}
          />
          <Stack.Screen name={ScreenNames.courseView} component={CourseView} />
          <Stack.Screen name={ScreenNames.videoView} component={VideoView} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
