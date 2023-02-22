import React, {useState, useRef, useEffect} from 'react';
import {View, ScrollView, Image, Dimensions} from 'react-native';

const images = [
  {
    id: 1,
    uri: require('../../../../assets/images/course1.png'),
  },
  {
    id: 2,
    uri: require('../../../../assets/images/course2.png'),
  },
  {
    id: 3,
    uri: require('../../../../assets/images/course3.png'),
  },
];

const windowWidth = Dimensions.get('window').width;

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
        scrollViewRef.current.scrollTo({x: 0, animated: true});
      } else {
        setIndex(prevIndex => {
          scrollViewRef.current.scrollTo({
            x: windowWidth * (prevIndex + 1),
            animated: true,
          });
          return prevIndex + 1;
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={event => {
          const contentOffset = event.nativeEvent.contentOffset;
          const index = Math.round(contentOffset.x / windowWidth);
          setIndex(index);
        }}
      >
        {images.map(item => (
          <Image
            key={item.id}
            source={item.uri}
            style={{width: windowWidth, height: 200}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Slider;
