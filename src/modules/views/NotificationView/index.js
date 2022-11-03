import {View, Text, Button} from 'react-native';
export default function NotificationView({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Notification View!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
