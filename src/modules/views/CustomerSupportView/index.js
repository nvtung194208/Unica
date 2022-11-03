import {View, Text, Button} from 'react-native';
export default function CustomerSupportView({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Customer Support View!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
