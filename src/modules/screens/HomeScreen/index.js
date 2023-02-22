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
import Slider from './Slider';
export default function HomeScreen({navigation}) {
  const [allCourseData, setAllCourseData] = useState([]);
  const [favCourseData, setFavCourseData] = useState([]);

  console.log('HomeScreen is rendering !!!!');
  useEffect(() => {
    fetch('https://unica-production-3451.up.railway.app/api/course')
      .then(response => response.json())
      .then(allCourseData => setAllCourseData(allCourseData.data))
      .catch(error => console.error(error));

    fetch('https://unica-production-3451.up.railway.app/api/course/list-favo/1')
      .then(response => response.json())
      .then(favCourseData => {
        const dataArray = Object.values(favCourseData.data);
        console.log('dataArray', dataArray);

        setFavCourseData(dataArray);
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <Slider></Slider>
        <ListCourse type="Khoá học đã xem" navigation={navigation} />
        <ListCourse type="Dành riêng cho bạn " navigation={navigation} />
        <ListCourse
          type="Khoá học đã thích"
          data={favCourseData}
          navigation={navigation}
        />
        <ListCourse
          type="Tất cả khoá học"
          data={allCourseData}
          navigation={navigation}
        />
        <CategorySheet navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
