import {View, Text, Button} from 'react-native';
import AppHeader from '../../components/AppHeader';

export default function StudyPathView({navigation}) {
  return (
    <View>
      <AppHeader navigation={navigation} text="Quản lý học tập" />
    </View>
  );
}
