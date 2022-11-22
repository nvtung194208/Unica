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

export default function FavouriteScreen(props) {
  console.log('FavouriteScreen is rendering !!!!');

  return (
    <SafeAreaView>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.header_text}>Khoá học yêu thích</Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
