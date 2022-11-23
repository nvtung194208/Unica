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
import ListCourse from './ListCourse';
export default function HomeScreen({navigation}) {
  console.log('HomeScreen is rendering !!!!');

  return (
    <SafeAreaView>
      <ListCourse type="Khoá học đã xem" />
      <CategorySheet navigation={navigation} />
    </SafeAreaView>
  );
}
