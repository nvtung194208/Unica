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

export default function StudyingScreen(props) {
  console.log('StudyingScreen is rendering !!!!');

  return (
    <SafeAreaView>
      <Text style={{fontSize: 20, color: 'black'}}>StudyingScreen</Text>
    </SafeAreaView>
  );
}
