import {View, Text, Button} from 'react-native';
export default function RateAppView({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Rate App View!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
