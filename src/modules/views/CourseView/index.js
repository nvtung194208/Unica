import {View, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './style';
import {useState} from 'react';
import DemoYouTubePlayerView from '../DemoYoutubePlayerView';
import Icon from 'react-native-vector-icons/Ionicons';
export default function CourseView({navigation, route}) {
  const {title, rate, price, key} = route.params;
  const [isFavourited, setIsFavourited] = useState(false);
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
              >
                <Text
                  style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}
                >
                  ĐĂNG KÝ HỌC
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
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
