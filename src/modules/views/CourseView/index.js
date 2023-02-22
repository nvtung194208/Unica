import {View, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './style';
import {useState} from 'react';
import DemoYouTubePlayerView from '../DemoYoutubePlayerView';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
export default function CourseView({navigation, route}) {
  const {title, rate, price, key} = route.params;
  const [isFavourited, setIsFavourited] = useState(false);
  const [isRegisted, setIsRegisted] = useState(false);
  var registerCourseText = isRegisted ? 'Huỷ đăng ký' : 'Đăng ký học';

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          <Icon style={styles.icon} size={25} name="arrow-back-outline" />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text numberOfLines={1} style={styles.header_text}>
            {JSON.stringify(title).replace(/\"/g, '')}
          </Text>
        </View>
        <View style={styles.right_icon_container}>
          <Icon name="cart-outline" style={styles.icon} size={25}></Icon>
        </View>
      </View>
      <View style={{height: '100%', width: '100%'}}>
        <DemoYouTubePlayerView style={styles.demo_video} />

        <View style={styles.course_info}>
          <ScrollView style={{height: '100%', width: '100%'}}>
            <View style={styles.first_container}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={styles.price_container}>
                  <Text style={styles.price}>{price}</Text>
                  <Text style={[styles.price, {fontSize: 24}]}>₫</Text>
                </View>
                <TouchableOpacity
                  onPress={() => setIsFavourited(!isFavourited)}
                  style={styles.heart_button}
                >
                  <Icon
                    name="heart"
                    size={26}
                    color={isFavourited ? 'red' : 'white'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{width: '100%', height: 50, marginTop: 20}}>
              <TouchableOpacity
                style={{
                  marginHorizontal: 20,
                  backgroundColor: 'red',
                  borderRadius: 5,
                  height: ' 100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setIsRegisted(!isRegisted);
                }}
              >
                <Text
                  style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}
                >
                  {registerCourseText}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: '100%', height: 50, marginTop: 5}}>
              <TouchableOpacity
                style={{
                  marginHorizontal: 20,
                  backgroundColor: 'green',
                  borderRadius: 5,
                  height: ' 100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}
                >
                  THÊM VÀO GIỎ HÀNG
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                marginTop: 30,
                marginHorizontal: 20,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <FontAwesome
                  name="clock-o"
                  color="#000000"
                  size={20}
                  style={{width: 25}}
                />
                <Text style={{fontSize: 16, color: '#000000'}}>Thời lượng</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <FontAwesome
                  name="play-circle-o"
                  color="#000000"
                  size={20}
                  style={{width: 25}}
                />
                <Text style={{fontSize: 16, color: '#000000'}}>Giáo trình</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <Foundation
                  name="loop"
                  color="#000000"
                  size={20}
                  style={{width: 25}}
                />
                <Text style={{fontSize: 16, color: '#000000'}}>
                  Sở hữu trọn đời
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <FontAwesome
                  name="certificate"
                  color="#000000"
                  size={20}
                  style={{width: 25}}
                />
                <Text style={{fontSize: 16, color: '#000000'}}>
                  Cấp chứng nhận hoàn thành
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                height: 40,
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000000',
                  marginLeft: 20,
                }}
              >
                Giới thiệu khoá học
              </Text>
            </View>
            <Text style={{marginHorizontal: 20}}>
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis
              parturient montes nascetur ridiculus mus mauris vitae. Ultrices mi
              tempus imperdiet nulla malesuada pellentesque elit eget. Nisl nisi
              scelerisque eu ultrices vitae auctor eu augue ut. Ipsum consequat
              nisl vel pretium lectus quam id leo in. Et netus et malesuada
              fames. Vitae proin sagittis nisl rhoncus mattis rhoncus. Imperdiet
              proin fermentum leo vel orci porta. Velit dignissim sodales ut eu
              sem integer. Risus commodo viverra maecenas accumsan lacus vel
              facilisis volutpat.'
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
