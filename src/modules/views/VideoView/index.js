import {View, Text, Button, TouchableOpacity} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Ionicons';

export default function VideoView({navigation, route, props}) {
  const {videoId, title} = route.params;
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
    </View>
  );
}
