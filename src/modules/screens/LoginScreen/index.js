import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {ScreenNames} from '../../../general/constants/ScreenNames';
import {
  getPreference,
  setPreference,
} from '../../../libs/storage/PreferenceStorage';
import {PreferenceKeys} from '../../../general/constants/Global';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(
    getPreference(PreferenceKeys.UserEmail)
      ? getPreference(PreferenceKeys.UserEmail)
      : '',
  );
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const renderLoading = () => {
    <ActivityIndicator size="large" color="#ffffff" />;
  };

  const handleLoginPress = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://unica-production-3451.up.railway.app/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        // console.log(data);
        // console.log(data.data.original.user);
        if (data.success) {
          const userId = await data.data.original.user.id;
          const token = await data.data.original.access_token;
          const userName = await data.data.original.user.name;
          const userEmail = await data.data.original.user.email;
          try {
            setPreference(PreferenceKeys.UserToken, token);
            setPreference(PreferenceKeys.UserId, userId.toString());
            setPreference(PreferenceKeys.UserName, userName);
            setPreference(PreferenceKeys.UserEmail, userEmail);
          } catch (error) {
            alert(error);
          }
          setIsLoading(false);
          navigation.navigate(ScreenNames.mainTab);
        }
      } else {
        // Handle error response from API
      }
    } catch (error) {
      console.error(error);
      // Handle error while making API call
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate(ScreenNames.registerScreen);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/login_background.jpg')}
      style={styles.background}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="envelope"
              size={20}
              color="#ffffff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#ffffff"
              style={styles.input}
              value={email}
              onChangeText={handleEmailChange}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInput.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="lock"
              size={20}
              color="#ffffff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#ffffff"
              style={styles.input}
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
              returnKeyType="go"
              ref={input => {
                passwordInput = input;
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleLoginPress}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>Đăng nhập</Text>
            )}
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={[
                styles.buttonContainer,
                {
                  backgroundColor: 'transparent',
                  width: '80%',
                },
              ]}
              onPress={handleRegisterPress}>
              <Text style={[styles.buttonText, {color: '#0975b5'}]}>
                Bạn chưa có tài khoản ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <View style={styles.businessInfo}>
          <Text style={styles.businessInfoText}>Business Information</Text>
        </View>
        <View style={styles.socialIcons}>
          <FontAwesome
            name="facebook-f"
            size={20}
            color="#ffffff"
            style={styles.socialIcon}
          />
          <FontAwesome
            name="twitter"
            size={20}
            color="#ffffff"
            style={styles.socialIcon}
          />
          <FontAwesome
            name="instagram"
            size={20}
            color="#ffffff"
            style={styles.socialIcon}
          />
        </View>
        <View style={styles.copyRight}>
          <Text style={styles.copyRightText}>
            © 2023 Unica. All Rights Reserved.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default LoginScreen;
