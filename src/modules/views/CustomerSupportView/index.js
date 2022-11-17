import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
export default function CustomerSupportView({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Hỗ trợ</Text>
      {/* <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
      <View style={styles.container}>
        <View style={styles.detail_container}>
          <Icon name="phone" />

          <Text style={styles.text}>Số điện thoại</Text>
        </View>
      </View>
    </View>
  );
}
