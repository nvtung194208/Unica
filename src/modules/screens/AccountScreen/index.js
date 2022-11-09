import React, {Component, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {ScreenNames} from '../../../general/constants/ScreenNames';
import AccountTabNavigator from '../../navigator/AccountTabNavigator';
export default function AccontScreen({navigation}) {
  console.log('AccountScreen is rendering !!!!');

  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
        <View style={{flex: 1}}>
          <SafeAreaView>
            <Text style={{fontSize: 20, color: 'black'}}>AccountScreen</Text>

            <View>
              <TouchableOpacity
                style={{height: 40}}
                onPress={() => {
                  navigation.navigate(ScreenNames.updateProfileView);
                }}
              >
                <Text style={{fontSize: 14, color: 'black'}}>
                  Cập nhật hồ sơ
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 40}}
                onPress={() => {
                  navigation.navigate(ScreenNames.changePasswordView);
                }}
              >
                <Text style={{fontSize: 14, color: 'black'}}>Đổi mật khẩu</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 40}}
                onPress={() => {
                  navigation.navigate(ScreenNames.notificationView);
                }}
              >
                <Text style={{fontSize: 14, color: 'black'}}>
                  Hộp thư thông báo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 40}}
                onPress={() => {
                  navigation.navigate(ScreenNames.studyPathView);
                }}
              >
                <Text style={{fontSize: 14, color: 'black'}}>
                  Lộ trình học tập
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 40}}
                onPress={() => {
                  navigation.navigate(ScreenNames.customerSupportView);
                }}
              >
                <Text style={{fontSize: 14, color: 'black'}}>
                  Hỗ trợ khách hàng kkkkk
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 40}}
                onPress={() => {
                  navigation.navigate(ScreenNames.rateAppView);
                }}
              >
                <Text style={{fontSize: 14, color: 'black'}}>
                  Đánh giá ứng dụng
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </SafeAreaView>
    </View>
  );
}
