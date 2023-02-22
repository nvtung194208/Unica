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
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {ScreenNames} from '../../../general/constants/ScreenNames';
import Ionicon from 'react-native-vector-icons/Ionicons';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handleNameChange = text => {
    setName(text);
  };
  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const handleRegisterPress = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Kiểm tra lại các thông tin');
      return;
    }
    try {
      const response = await fetch(
        'https://unica-production-3451.up.railway.app/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            confirm_password: confirmPassword,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        navigation.navigate(ScreenNames.loginScreen);
      } else {
        // Handle error response from API
      }
    } catch (error) {
      console.error(error);
      // Handle error while making API call
    }
  };

  const handleHaveAccountPress = () => {
    navigation.navigate(ScreenNames.loginScreen);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/signup_background.jpg')}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="user"
              size={20}
              color="#ffffff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Tên của bạn"
              placeholderTextColor="#ffffff"
              style={styles.input}
              value={name}
              onChangeText={handleNameChange}
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInput.focus();
              }}
              blurOnSubmit={false}
            />
          </View>
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
          <View style={[styles.inputContainer]}>
            <FontAwesome
              name="lock"
              size={20}
              color="#ffffff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Mật khẩu"
              placeholderTextColor="#ffffff"
              style={styles.input}
              value={password}
              onChangeText={handlePasswordChange}
              returnKeyType="go"
              ref={input => {
                passwordInput = input;
              }}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              onPress={() => {
                setPasswordVisibility(!isPasswordVisible);
              }}
            >
              <Ionicon
                name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#000000"
                style={{marginLeft: 5}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="lock"
              size={20}
              color="#ffffff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor="#ffffff"
              style={styles.input}
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              returnKeyType="go"
              ref={input => {
                passwordInput = input;
              }}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              on={() => {
                setPasswordVisibility(!isPasswordVisible);
              }}
            >
              <Ionicon
                name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#000000"
                style={{marginLeft: 5}}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleRegisterPress}
          >
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              style={[
                styles.buttonContainer,
                {
                  backgroundColor: 'transparent',
                  // backgroundColor: 'red',
                  width: '50%',
                },
              ]}
              onPress={handleHaveAccountPress}
            >
              <Text style={[styles.buttonText, {color: '#0975b5'}]}>
                Bạn đã có tài khoản
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },

  formContainer: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  input: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 25,
    color: '#ffffff',
    height: 50,
    fontSize: 16,
    paddingLeft: 20,
    flex: 1,
  },

  buttonContainer: {
    backgroundColor: '#0975b5',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  businessInfo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  businessInfoText: {
    color: '#ffffff',
    fontSize: 14,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  copyRight: {
    alignItems: 'center',
  },
  copyRightText: {
    color: '#ffffff',
    fontSize: 12,
  },
});
export default RegisterScreen;
