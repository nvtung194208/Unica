import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  category_container: {
    width: '100%',

    // backgroundColor: 'green',
  },

  category_box: {
    borderBottomColor: '#d4d2d2',
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    bottom: 0,
  },

  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
  },

  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
    // backgroundColor: 'yellow',
  },

  text_bold: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 20,

    color: 'black',
  },
});
