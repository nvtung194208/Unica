import React, {useState, useRef, useEffect} from 'react';
import {View, FlatList, Image} from 'react-native';
import {images} from '../../../../general/constants/TestImage';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
      flatListRef.current.scrollToIndex({index, animated: true});
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  const renderItem = ({item}) => (
    <Image source={{uri: item.uri}} style={{width: '100%', height: '100%'}} />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const {contentOffset} = event.nativeEvent;
          const index = Math.round(contentOffset.x / event.target.offsetWidth);
          setIndex(index);
        }}
        // initialScrollIndex={flatListRef.current}
        // onScrollToIndexFailed={images => {
        //   const wait = new Promise(resolve => setTimeout(resolve, 500));
        //   wait.then(() => {
        //     flatListRef.current?.scrollToIndex({
        //       index: images.index,
        //       animated: true,
        //     });
        //   });
        // }}
      />
    </View>
  );
};

export default Slider;
