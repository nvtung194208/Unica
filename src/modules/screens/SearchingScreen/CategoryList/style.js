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
  },

  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
  },

  icon: {
    alignSelf: 'center',
    marginLeft: 25,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  text_bold: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
