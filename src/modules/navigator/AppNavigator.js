import React from 'react'

import { NavigationContainer, StackActions } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'


const Stack = createNativeStackNavigator()

export default AppNavigator = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}