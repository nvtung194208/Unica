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
import ViewedCourse from './ViewedCourse';

export default function HomeScreen({navigation}) {
  console.log('HomeScreen is rendering !!!!');

  return (
    <SafeAreaView>
      <ViewedCourse />
      <CategorySheet navigation={navigation} />
    </SafeAreaView>
  );
}
