import React from 'react';
import CourseBox from '../../../components/CourseBox';
import {TestCourses} from '../../../../general/constants/TestCourses';
import {ScrollView, View} from 'react-native';
export default function ViewedCourse() {
  return (
    <View>
      <ScrollView horizontal={true}>
        {TestCourses.map(course => (
          <CourseBox key={course.id} />
        ))}
      </ScrollView>
    </View>
  );
}
