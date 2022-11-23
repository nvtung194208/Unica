import React from 'react';
import CourseBox from '../../../components/CourseBox';
import {TestCourses} from '../../../../general/constants/TestCourses';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ScreenNames} from '../../../../general/constants/ScreenNames';
import {FlatList} from 'react-native';
export default function ListCourse(props) {
  const renderItem = ({item}) => (
    <CourseBox
      key={item.id}
      title={item.title}
      rate={item.rate}
      image={item.image}
      price={item.price}
      navigation={props.navigation}
    />
  );
  return (
    <View style={{marginTop: 30, justifyContent: 'center'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.type}>{props.type}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(ScreenNames.categoryView, {
              title: props.type,
            });
          }}
          style={{
            width: '30%',
            height: 45,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.more}>Xem thêm {'>'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal={true}
        data={TestCourses}
        renderItem={renderItem}
        keyExtractor={course => course.id}
        removeClippedSubviews={true}
        maxToRenderPerBatch={6}
        initialNumToRender={6}
      />
    </View>
  );
}
