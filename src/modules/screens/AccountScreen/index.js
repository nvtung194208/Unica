import React, {Component, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {ScreenNames} from '../../../general/constants/ScreenNames';
import {styles} from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {images} from '../../../assets/images';

export default AccountScreen = ({navigation}) => {
  console.log('AccountScreen is rendering !!!!');

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <View style={styles.header}>
          <Text style={styles.header_text}>Tài khoản</Text>
        </View>
        <View style={styles.user_avt}>
          <Image style={styles.image} source={images.test_image} />
        </View>
        <Text style={{marginTop: 30}}>tunglk27@gmail.com</Text>
        <View style={styles.tab_container}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              navigation.navigate(ScreenNames.updateProfileView);
            }}
          >
            <Text style={styles.text}>Cập nhật hồ sơ</Text>
            <Icon name="right" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              navigation.navigate(ScreenNames.changePasswordView);
            }}
          >
            <Text style={styles.text}>Đổi mật khẩu</Text>
            <Icon name="right" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              navigation.navigate(ScreenNames.notificationView);
            }}
          >
            <Text style={styles.text}>Hộp thư thông báo</Text>
            <Icon name="right" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              navigation.navigate(ScreenNames.studyPathView);
            }}
          >
            <Text style={styles.text}>Lộ trình học tập</Text>
            <Icon name="right" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              navigation.navigate(ScreenNames.customerSupportView);
            }}
          >
            <Text style={styles.text}>Hỗ trợ khách hàng</Text>
            <Icon name="right" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              navigation.navigate(ScreenNames.rateAppView);
            }}
          >
            <Text style={styles.text}>Đánh giá ứng dụng</Text>
            <Icon name="right" style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.tab, {justifyContent: 'center'}]}>
            <Icon
              name="logout"
              size={20}
              style={{color: 'red', marginRight: 20}}
            />
            <Text style={{fontSize: 20, color: 'red'}}>ĐĂNG XUẤT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
