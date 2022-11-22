import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  category_container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  category_box: {
    backgroundColor: '#d4d2d2',
    width: 110,
    height: 100,
    marginTop: 20,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 10,
    marginTop: 5,
  },

  icon: {
    alignSelf: 'center',
  },

  text_bold: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
