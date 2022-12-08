import {View, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './style';
import DemoYouTubePlayerView from '../DemoYoutubePlayerView';
import Icon from 'react-native-vector-icons/AntDesign';
export default function CourseView({navigation, route}) {
  const {title, rate, price, key} = route.params;

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
                <TouchableOpacity style={styles.heart_button}>
                  <Icon name="hearto" size={26} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
