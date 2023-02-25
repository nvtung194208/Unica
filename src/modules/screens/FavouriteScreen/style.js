import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#d4d2d2',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },

  header_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
});
