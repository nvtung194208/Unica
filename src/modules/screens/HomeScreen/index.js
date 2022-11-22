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
import CategorySheet from './CategorySheet';

export default function HomeScreen({navigation}) {
  console.log('HomeScreen is rendering !!!!');

  return (
    <SafeAreaView>
      <Text style={{fontSize: 20, color: 'black'}}>HomeScreen</Text>
      <CategorySheet navigation={navigation} />
    </SafeAreaView>
  );
}
