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
import {styles} from './style';

import AppHeader from '../../components/AppHeader';
export default function StudyingScreen(navigation) {
  console.log('StudyingScreen is rendering !!!!');

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.header_text}>Khoá học trọn đời</Text>
      </View>
    </SafeAreaView>
  );
}
