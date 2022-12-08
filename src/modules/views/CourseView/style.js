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

  demo_video: {
    width: '100%',
    height: '30%',
  },
  course_info: {
    width: '100%',
    height: '70%',
  },
  price_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  price: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  first_container: {
    height: 50,
    justifyContent: 'center',
  },
  heart_button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#d4d2d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
