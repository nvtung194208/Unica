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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {ScreenNames} from '../../../general/constants/ScreenNames';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleLoginPress = () => {
    // TODO: Implement login logic
    navigation.navigate(ScreenNames.mainTab);
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/login_backgroud.jpg')}
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
            onPress={handleLoginPress}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
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
export default LoginScreen;
