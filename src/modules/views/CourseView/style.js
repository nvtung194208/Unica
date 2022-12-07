import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#d4d2d2',
    borderBottomWidth: 1,
  },

  header_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  button: {
    width: 75,
    height: 50,
    justifyContent: 'center',
  },

  icon: {
    color: 'black',
    marginLeft: 20,
  },
  textView: {
    flex: 1,
    height: 50,

    justifyContent: 'center',

    alignItems: 'center',
  },
  right_icon_container: {
    width: 75,
  },

  // courses_container: {
  //   width: '100%',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  // },
});
