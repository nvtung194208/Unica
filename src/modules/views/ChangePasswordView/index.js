import {View, Text, Button} from 'react-native';
import AppHeader from '../../components/AppHeader';

export default function ChangePasswordView({navigation}) {
  return (
    <View>
      <AppHeader navigation={navigation} text="Đổi mật khẩu" />
    </View>
  );
}
