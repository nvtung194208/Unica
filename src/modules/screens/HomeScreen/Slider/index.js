import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';

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
  const [autoScroll, setAutoScroll] = useState(true);
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScroll) {
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
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [autoScroll, index]);

  const handleScroll = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / windowWidth);
    setIndex(index);
    setAutoScroll(false);

    setTimeout(() => {
      setAutoScroll(true);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleScroll}
      >
        {images.map(item => (
          <View style={styles.slideContainer} key={item.id}>
            <Image source={item.uri} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {images.map((item, i) => (
          <View
            key={item.id}
            style={[styles.indicator, {opacity: index === i ? 1 : 0.5}]}
          ></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideContainer: {
    height: 220,
    width: windowWidth,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
});

export default Slider;
