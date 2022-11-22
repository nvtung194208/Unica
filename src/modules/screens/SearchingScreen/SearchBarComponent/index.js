import {View, Text, Keyboard} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
export default function SearchBarComponent() {
  return (
    <>
      <View
        style={{
          height: 100,
          width: '100%',
          // backgroundColor: 'red',
          marginTop: 20,
        }}
      >
        <SearchBar
          placeholder="Search here"
          onClearPress={() => {
            Keyboard.dismiss();
          }}
          onChangeText={text => console.log(text)}
          style={{
            backgroundColor: '#d4d2d2',
          }}
        />
      </View>
    </>
  );
}
