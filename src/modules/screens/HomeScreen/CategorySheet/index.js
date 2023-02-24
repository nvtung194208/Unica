import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './style';
import {Category} from '../../../../general/constants/Category';
import {ScreenNames} from '../../../../general/constants/ScreenNames';
export default function CategorySheet(props, navigation) {
  const iconSize = 25;

  return (
    <View style={{marginVertical: 20}}>
      <Text style={styles.text_bold}>
        Bạn chưa tìm thấy khoá học mình quan tâm ?
      </Text>
      <Text style={styles.text_bold}>
        Unica có hơn 2.000 khoá học đang chờ bạn khám phá
      </Text>

      <View style={styles.category_container}>
        {Category.map(category => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(ScreenNames.categoryView, {
                title: category.title,
                id: category.id,
              });
            }}
            key={category.id}
            style={styles.category_box}
          >
            <Icon
              name={category.icon}
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
