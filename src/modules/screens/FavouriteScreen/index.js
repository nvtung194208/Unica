import React, {Component, useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {styles} from './style';
import {PreferenceKeys} from '../../../general/constants/Global';
import {getPreference} from '../../../libs/storage/PreferenceStorage';
import AppHeader from '../../components/AppHeader';
import CourseBox from '../../components/CourseBox';
export default function FavouriteScreen({navigation}) {
  console.log('FavouriteScreen is rendering !!!!');
  const [listCourseData, setListCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    const userId = await getPreference(PreferenceKeys.UserId);

    const promise1 = fetch(
      `https://unica-production-3451.up.railway.app/api/course/list-favo/${userId}`,
    )
      .then(response => response.json())
      .catch(error => console.error(error));

    const result1 = await Promise.resolve(promise1);
    setListCourseData(result1.data);

    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0975b5" />;
  }

  const renderItem = ({item}) => (
    <CourseBox
      key={item.id}
      id={item.id}
      title={item.name}
      rate={item.rate}
      image={item.photo}
      price={item.price}
      navigation={navigation}
    />
  );

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Khoá học yêu thích</Text>
      </View>

      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        horizontal={false}
        data={listCourseData}
        renderItem={renderItem}
        keyExtractor={course => course.id}
        removeClippedSubviews={true}
        maxToRenderPerBatch={6}
        initialNumToRender={6}
        numColumns={2}
      />
    </View>
  );
}
