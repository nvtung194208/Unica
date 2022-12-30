import {View, Text, Button, TouchableOpacity} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {styles} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
export default function UpdateProfileView({navigation}) {
  var iconSize = 25;

  const [name, onChangeName] = useState('Nguyễn Việt Tùng');
  const [email, onChangeEmail] = useState('tunglk27@gmail.com');
  const [phoneNum, onChangePhoneNum] = useState('0947977023');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={{}}>
      {/* <Text style={{fontSize: 30}}>Update Profile View!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
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
          <TouchableOpacity>
            <Text>{date.getDay().toFixed()}</Text>
          </TouchableOpacity>
          <Button title="Open" onPress={() => setOpen(true)} />
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
          />
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

      <View style={styles.button}>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}
