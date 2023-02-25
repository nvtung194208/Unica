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
      id={item.id}
      title={item.name}
      rate={item.rate}
      image={item.photo}
      price={item.price}
      status={item.pivot}
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
            props.navigation.navigate(ScreenNames.listCourseView, {
              title: props.type,
              data: props.data,
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
        data={props.data && props.data.slice(0, 6)}
        renderItem={renderItem}
        keyExtractor={course => course.id}
        removeClippedSubviews={true}
        maxToRenderPerBatch={6}
        initialNumToRender={6}
      />
    </View>
  );
}
