import {View, Text, Button} from 'react-native';
import AppHeader from '../../components/AppHeader';
export default function UpdateProfileView({navigation}) {
  return (
    <View style={{}}>
      {/* <Text style={{fontSize: 30}}>Update Profile View!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
      <AppHeader navigation={navigation} text="Cập nhật tài khoản" />
    </View>
  );
}
