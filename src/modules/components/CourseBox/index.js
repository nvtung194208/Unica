import React from 'react';
import {styles} from './style';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {images} from '../../../assets/images';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {ScreenNames} from '../../../general/constants/ScreenNames';
export default function CourseBox(props) {
  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(ScreenNames.courseView, {
          key: props.id,
          title: props.title,
          rate: props.rate,
          image: props.image,
          price: numberWithDots(props.price),
        });
      }}
      style={styles.container}
    >
      <View style={{flex: 1}}>
        <Image style={styles.image} source={props.image} />
      </View>
      <View style={styles.info_container}>
        <View style={{flex: 2, justifyContent: 'center', width: '90%'}}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            marginRight: 45,
          }}
        >
          <Rating
            type="star"
            ratingCount={5}
            startingValue={props.rate}
            imageSize={20}
            tintColor="#efefef"
            ratingBackgroundColor="#efefef"
            readonly={true}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.price}>{numberWithDots(props.price)}₫</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
