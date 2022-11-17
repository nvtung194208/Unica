import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './style';

export default function CategoryList() {
  //constants
  const iconSize = 20;

  return (
    <View>
      <View style={{}}>
        <View style={styles.category_container}>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="language"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Ngoại ngữ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="paint-brush"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Thiết kế</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="shopping-cart"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Sales, bán hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="utensils"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Phong cách sống</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.category_container}>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="chart-line"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Marketing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="rocket"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Kinh doanh- khởi nghiệp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="code"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Công nghệ thông tin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="child"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Nuôi dạy con</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.category_container}>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="laptop"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Tin học văn phòng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="lightbulb"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Phát triển cá nhân</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="heartbeat"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Sức khoẻ - Giới tính</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category_box}>
            <Icon
              name="house-user"
              size={iconSize}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>Hôn nhân - gia đình</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
