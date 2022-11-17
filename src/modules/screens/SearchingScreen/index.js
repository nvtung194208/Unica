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
import CategoryList from './CategoryList';
import SearchBarComponent from './SearchBarComponent';

export default function SearchingScreen(props) {
  console.log('SearchingScreen is rendering !!!!');

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <SearchBarComponent />
        <CategoryList />
      </SafeAreaView>
    </View>
  );
}
