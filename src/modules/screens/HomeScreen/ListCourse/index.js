import React from 'react';
import CourseBox from '../../../components/CourseBox';
import {TestCourses} from '../../../../general/constants/TestCourses';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
export default function ListCourse(props) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
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
      <ScrollView horizontal={true}>
        {TestCourses.map(course => (
          <CourseBox
            key={course.id}
            title={course.title}
            rate={course.rate}
            image={course.image}
            price={numberWithCommas(course.price)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
