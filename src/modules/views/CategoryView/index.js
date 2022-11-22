import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Octicons';
export default function CategoryView({navigation, route}) {
  const {title} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          <Icon style={styles.icon} size={25} name="arrow-left" />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.header_text}>
            {JSON.stringify(title).replace(/\"/g, '')}
          </Text>
        </View>
      </View>
    </View>
  );
}
