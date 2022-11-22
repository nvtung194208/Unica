import React, {Component} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './modules/navigator/AppNavigator';
function App() {
  return (
    <SafeAreaProvider>
      <StatusBar animated={true} barStyle="default" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
export default App;
