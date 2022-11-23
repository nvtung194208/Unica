import React, {Component, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CategorySheet from './CategorySheet';
import ListCourse from './ListCourse';
export default function HomeScreen({navigation}) {
  console.log('HomeScreen is rendering !!!!');

  return (
    <SafeAreaView>
      <ScrollView>
        <ListCourse type="Khoá học đã xem" navigation={navigation} />
        <ListCourse type="Dành riêng cho bạn " navigation={navigation} />
        <ListCourse type="Top bán chạy" navigation={navigation} />
        <ListCourse type="Ưu đãi hôm nay" navigation={navigation} />
        <ListCourse type="Mới ra mắt" navigation={navigation} />
        <CategorySheet navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
