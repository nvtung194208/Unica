import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header_text: {
    fontSize: 18,
    marginLeft: 20,
    marginVertical: 10,
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
  },
  tab_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },

  button: {
    height: 70,
    backgroundColor: '#1877f2',
    bottom: 0,
    position: 'absolute',
  },

  input: {
    // borderWidth: 1,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
  },
  date_picker: {
    backgroundColor: 'red',
  },
});
