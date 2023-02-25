import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header_text: {
    fontSize: 18,
    marginLeft: 20,
    marginVertical: 10,
    color: '#000000',
  },
  tab: {
    borderBottomWidth: 1,
    display: 'flex',
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },

  icon: {
    marginLeft: 20,
    color: '#000000',
  },
  tab_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 20,
  },

  button: {
    height: 70,
    backgroundColor: '#1877f2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    // borderWidth: 1,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
  },
  date_picker: {
    backgroundColor: 'red',
  },
  button_text: {
    color: '#ffffff',
    fontSize: 20,
  },
});
