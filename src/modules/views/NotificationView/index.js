import {View, Text, Button} from 'react-native';
import AppHeader from '../../components/AppHeader';

export default function NotificationView({navigation}) {
  return (
    <View>
      <AppHeader navigation={navigation} text="Thông báo" />
    </View>
  );
}
