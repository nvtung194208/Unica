import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
import AppHeader from '../../components/AppHeader';

export default function CustomerSupportView({navigation}) {
  return (
    <View style={{}}>
      <AppHeader navigation={navigation} text="Hỗ trợ" />
      {/* <View style={styles.container}>
        <View style={styles.detail_container}>
          <Icon name="phone" />

          <Text style={styles.text}>Số điện thoại</Text>
        </View>
      </View> */}
    </View>
  );
}
