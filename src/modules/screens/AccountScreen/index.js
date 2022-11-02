import React, {Component, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AccountTabNavigator from '../../navigator/AccountTabNavigator';
export default function AccontScreen(props) {
  console.log('AccountScreen is rendering !!!!');

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <AccountTabNavigator />
      </SafeAreaView>
    </View>
  );
}
