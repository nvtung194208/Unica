import React, {useEffect, useState, memo} from 'react';
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

const ViewedCourses = memo(({data, navigation}) => (
  <ListCourse type="Khoá học đã xem" data={data} navigation={navigation} />
));

const FavoriteCourses = memo(({data, navigation}) => (
  <ListCourse type="Khoá học đã thích" data={data} navigation={navigation} />
));

const AllCourses = memo(({data, navigation}) => (
  <ListCourse type="Tất cả khoá học" data={data} navigation={navigation} />
));

function HomeScreen({navigation}) {
  const [allCourseData, setAllCourseData] = useState([]);
  const [favCourseData, setFavCourseData] = useState([]);
  const [viewedCourseData, setViewedCourseData] = useState([]);
  const [dataLengths, setDataLengths] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      )
        .then(response => response.json())
        .catch(error => console.error(error));

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
      setFavCourseData(result2.data);
      setViewedCourseData(result3.data);
      setDataLengths({
        all: result1.data.length,
        fav: result2.data.length,
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
        <ViewedCourses data={viewedCourseData} navigation={navigation} />
        <ListCourse type="Dành riêng cho bạn " navigation={navigation} />
        <FavoriteCourses data={favCourseData} navigation={navigation} />
        <AllCourses data={allCourseData} navigation={navigation} />
        <CategorySheet navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
