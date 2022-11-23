import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,

    borderRadius: 10,
    margin: 10,
    display: 'flex',
  },
  title: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  },
  image: {
    height: 100,
    width: 160,
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  rate: {
    backgroundColor: 'red',
  },
  info_container: {
    flex: 1,
    borderColor: '#d4d2d2',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
