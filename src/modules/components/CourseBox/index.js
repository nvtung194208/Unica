import React from 'react';
import {styles} from './style';
import {View, Image} from 'react-native';
import {images} from '../../../assets/images';
export default function CourseBox(props) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          style={{height: 100, width: 148, resizeMode: 'stretch'}}
          source={images.course_image}
        />
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
}
