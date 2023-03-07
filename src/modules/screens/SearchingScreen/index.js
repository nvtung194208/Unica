import React, {Component, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CategoryList from './CategoryList';
import SearchBar from 'react-native-dynamic-search-bar';
import {styles} from './style';
import CourseBox from '../../components/CourseBox';
export default function SearchingScreen({navigation}) {
  console.log('SearchingScreen is rendering !!!!');
  const [listCourseData, setListCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    const promise1 = fetch(
      'https://unica-production-3451.up.railway.app/api/course',
    )
      .then(response => response.json())
      .catch(error => console.error(error));

    const result1 = await Promise.resolve(promise1);
    setListCourseData(result1.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  // const renderListFooter = () =>
  //   <CategoryList navigation={navigation}/>;
  // };

  const [query, setQuery] = useState('');

  const filterCourses = () => {
    return listCourseData.filter(course => {
      return course.name.toLowerCase().includes(query.toLowerCase());
    });
  };

  // const handleOnChangeText = () => {
  //   {
  //     text => setQuery(text);
  //     console.log(query);
  //   }
  // };
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0975b5" />;
  }
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.searchbar}>
        <SearchBar
          onChangeText={text => {
            setQuery(text);
            console.log(text);
          }}
        />
      </View>
      <FlatList
        style={{marginHorizontal: 27.5}}
        horizontal={false}
        data={filterCourses()}
        renderItem={renderItem}
        keyExtractor={course => course.id}
        removeClippedSubviews={true}
        maxToRenderPerBatch={6}
        initialNumToRender={6}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<CategoryList navigation={navigation} />}
      />
    </View>
  );
}
