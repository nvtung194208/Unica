import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';
export default function CustomerSupportView({navigation}) {
  return (
<<<<<<< HEAD
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text style={{fontSize: 30}}>Customer Support View!</Text>
    //   <Button onPress={() => navigation.goBack()} title="Dismiss" />
    // </View>
   
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Số điên thoại: 1900 636 999
        </Text>
        <Text>
          Email hỗ trợ: cskh@unica.com 
        </Text>
      </View>
     
    
=======
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
>>>>>>> main
  );
}
