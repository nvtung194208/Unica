import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    marginTop: 100,
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
