import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import {getPreference} from '../../../libs/storage/PreferenceStorage';
import {PreferenceKeys} from '../../../general/constants/Global';
export default function UpdateProfileView({navigation}) {
  var iconSize = 25;

  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phoneNum, onChangePhoneNum] = useState('');
  const [dob, onChangeDOB] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userId = await getPreference(PreferenceKeys.UserId);

      const promise1 = fetch(
        `https://unica-production-3451.up.railway.app/api/user/${userId}`,
      )
        .then(response => response.json())
        .catch(error => console.error(error));

      const [result1] = await Promise.all([promise1]);
      onChangeName(result1.data.name);
      onChangeEmail(result1.data.email);
      onChangeDOB(result1.data.birthday);
      onChangePhoneNum(result1.data.phone);

      setIsLoading(false);
    };
    fetchData();
  }, [name]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0975b5" />;
  }

  return (
    <SafeAreaView>
      <AppHeader navigation={navigation} text="Cập nhật tài khoản" />
      <Text style={styles.header_text}>THÔNG TIN CÁ NHÂN</Text>
      <View style={styles.tab}>
        <AntDesign style={styles.icon} size={iconSize} name="user" />
        <Text style={styles.tab_text}>Họ và tên</Text>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            activeUnderlineColor="#1877f2"
          />
        </View>
      </View>
      <View style={styles.tab}>
        <Fontisto style={styles.icon} size={iconSize} name="email" />
        <Text style={styles.tab_text}>Email</Text>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            activeUnderlineColor="#1877f2"
          />
        </View>
      </View>

      <View style={styles.tab}>
        <AntDesign style={styles.icon} size={iconSize} name="gift" />
        <Text style={styles.tab_text}>Ngày sinh </Text>
        <View style={{flex: 1}}>
          {/* <Button title="Open" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}

          <View style={{flex: 1}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeDOB}
              value={dob}
              activeUnderlineColor="#1877f2"
            />
          </View>
        </View>
      </View>

      <View style={styles.tab}>
        <Feather style={styles.icon} size={iconSize} name="phone" />
        <Text style={styles.tab_text}>Số điện thoại</Text>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangePhoneNum}
            value={phoneNum}
            activeUnderlineColor="#1877f2"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>CẬP NHẬT THÔNG TIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
