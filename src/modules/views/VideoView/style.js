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
    marginTop: 10,
  },
  heart_button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#d4d2d2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  sectionHeader: {
    backgroundColor: '#808080',
    height: 80,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeader_text: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  item: {
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d4d2d2',
    display: 'flex',
    flexDirection: 'row',
  },
  item_text_container: {},
  item_text: {
    fontSize: 14,
    color: '#000000',
    marginHorizontal: 10,
  },
  learn_button: {
    width: 60,
    height: 30,
    backgroundColor: '#0975b5',
    marginRight: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: '#ffffff',
    fontSize: 12,
  },
});
