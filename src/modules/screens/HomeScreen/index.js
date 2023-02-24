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
  ActivityIndicator,
} from 'react-native';
import {PreferenceKeys} from '../../../general/constants/Global';
import {getPreference} from '../../../libs/storage/PreferenceStorage';
import CategorySheet from './CategorySheet';
import ListCourse from './ListCourse';
import Slider from './Slider';
export default function HomeScreen({navigation}) {
  const [allCourseData, setAllCourseData] = useState([]);
  const [favCourseData, setFavCourseData] = useState([]);
  const [viewedCourseData, setViewedCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataLengths, setDataLengths] = useState({all: 0, fav: 0, viewed: 0});
  console.log('HomeScreen is rendering !!!!');

  useEffect(() => {
    const fetchData = async () => {
      const userId = await getPreference(PreferenceKeys.UserId);

      const promise1 = fetch(
        'https://unica-production-3451.up.railway.app/api/course',
      )
        .then(response => response.json())
        .catch(error => console.error(error));

      const promise2 = fetch(
        `https://unica-production-3451.up.railway.app/api/course/list-favo/${userId}`,
      ).then(response => response.json());

      const promise3 = fetch(
        `https://unica-production-3451.up.railway.app/api/course/list-view/${userId}`,
      )
        .then(response => response.json())
        .catch(error => console.error(error));

      const [result1, result2, result3] = await Promise.all([
        promise1,
        promise2,
        promise3,
      ]);
      setAllCourseData(result1.data);
      setFavCourseData(Object.values(result2.data));
      setViewedCourseData(result3.data);
      setDataLengths({
        all: result1.data.length,
        fav: Object.values(result2.data).length,
        viewed: result3.data.length,
      });
      setIsLoading(false);
    };
    fetchData();
  }, [dataLengths]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0975b5" />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Slider></Slider>
        <ListCourse
          type="Khoá học đã xem"
          data={viewedCourseData}
          navigation={navigation}
        />
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
