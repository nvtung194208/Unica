import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Octicons';
import CourseBox from '../../components/CourseBox';
import {useState, useEffect} from 'react';
export default function CategoryView({navigation, route}) {
  const [listCourseData, setListCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {title, id} = route.params;
  useEffect(() => {
    const fetchData = async () => {
      const promise1 = fetch(
        `https://unica-production-3451.up.railway.app/api/category/${id}`,
      )
        .then(response => response.json())
        .catch(error => console.error(error));

      const [result1] = await Promise.all([promise1]);
      setListCourseData(result1.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0975b5" />;
  }

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
          data={listCourseData}
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
