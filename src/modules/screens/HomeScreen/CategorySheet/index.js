import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CategorySheet() {
  const iconSize = 25;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <View style={styles.category_container}>
        <View style={styles.category_box}>
          <Icon
            name="language"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Ngoại ngữ</Text>
        </View>
        <View style={styles.category_box}>
          <Icon
            name="paint-brush"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Thiết kế</Text>
        </View>
        <View style={styles.category_box}>
          <Icon
            name="shopping-cart"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Sales, bán hàng</Text>
        </View>
        <View style={styles.category_box}>
          <Icon
            name="utensils"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Phong cách{'\n'}sống</Text>
        </View>
      </View>
      <View style={styles.category_container}>
        <View style={styles.category_box}>
          <Icon
            name="chart-line"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Marketing</Text>
        </View>
        <View style={styles.category_box}>
          <Icon
            name="rocket"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Kinh doanh- khởi nghiệp</Text>
        </View>
        <View style={styles.category_box}>
          <Icon name="code" size={iconSize} color="black" style={styles.icon} />
          <Text style={styles.text}>Công nghệ thông{'\n'}tin</Text>
        </View>
        <View style={styles.category_box}>
          <Icon
            name="child"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Nuôi dạy con</Text>
        </View>
      </View>
      <View style={styles.category_container}>
        <View style={styles.category_box}>
          <Icon
            name="laptop"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Tin học văn{'\n'}phòng</Text>
        </View>
        <View style={styles.category_box}>
          <Icon
            name="lightbulb"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Phát triển cá{'\n'}nhân</Text>
        </View>
        <View style={styles.category_box}>
          <Icon
            name="heartbeat"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Sức khoẻ - Giới{'\n'}tính</Text>
        </View>
        <View style={styles.category_box}>
          <Icon
            name="house-user"
            size={iconSize}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Hôn nhân - gia{'\n'}đình</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category_container: {
    width: 110,
    display: 'flex',
    // backgroundColor: 'green',
  },

  category_box: {
    backgroundColor: '#d4d2d2',
    width: 110,
    height: 100,
    marginTop: 30,
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
    marginTop: 5,
  },

  icon: {
    alignSelf: 'center',
  },
});
