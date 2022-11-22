import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './style';
import {Category} from '../../../../general/constants/Category';
import {ScreenNames} from '../../../../general/constants/ScreenNames';
export default function CategoryList(props) {
  //constants
  const iconSize = 20;

  return (
    <>
      <Text style={styles.text_bold}>Danh mục khoá học</Text>
      <View style={styles.category_container}>
        {Category.map(category => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(ScreenNames.categoryView, {
                title: category.title,
              });
            }}
            key={category.id}
            style={styles.category_box}
          >
            <View
              style={{
                width: 65,
                // backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon
                name={category.icon}
                size={iconSize}
                color="black"
                style={styles.icon}
              />
            </View>

            <Text style={styles.text}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
