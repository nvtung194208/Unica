import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Octicons';
import {TestCourses} from '../../../general/constants/TestCourses';
import CourseBox from '../../components/CourseBox';
export default function ListCourseView({navigation, route}) {
  const {title, data} = route.params;
  console.log(data);

  const renderItem = ({item}) => (
    <CourseBox
      key={item.id}
      id={item.id}
      title={item.name}
      rate={item.rate}
      image={item.photo}
      price={item.price}
      navigation={navigation}
    />
  );

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
      <ScrollView horizontal={true} style={styles.courses_container}>
        <FlatList
          horizontal={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={course => course.id}
          removeClippedSubviews={true}
          maxToRenderPerBatch={6}
          initialNumToRender={6}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
}
