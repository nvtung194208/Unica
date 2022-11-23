import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tab_container: {
    width: '100%',
    marginTop: 45,
    alignItems: 'center',
  },
  tab: {
    width: '80%',
    alignItems: 'center',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: 'black',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
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
  user_avt: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'contain',
  },
});
