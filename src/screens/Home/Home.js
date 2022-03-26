import {View, Animated, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {images} from '../../../constants';
import SearchSection from './SearchSection';
import {MostSearchedSection} from './MostSearchedSection';
import BestDealsSection from './BestDealsSection';
import TopTrendingPlace from './TopTrendingPlace';
const Home = () => {
  const [scrollY] = useState(new Animated.Value(0));

  const coverTranslateY = scrollY.interpolate({
    inputRange: [-4, 0, 10],
    outputRange: [-2, 0, 3],
  });

  const coverScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [2, 1],
    extrapolateRight: 'clamp',
  });
  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ],
        {
          useNativeDriver: true,
        },
      )}>
      <Animated.View
        style={[
          styles.coverImageContainer,
          {
            transform: [
              {
                translateY: coverTranslateY,
              },
            ],
          },
        ]}>
        <Animated.Image
          source={images.homeCover}
          resizeMode="cover"
          style={[
            styles.coverImage,
            {
              transform: [
                {
                  scale: coverScale,
                },
              ],
            },
          ]}
        />
      </Animated.View>
      <View style={styles.container}>
        <SearchSection />
        <MostSearchedSection />
        <TopTrendingPlace />
        <BestDealsSection />
      </View>
    </Animated.ScrollView>
  );
};

export default Home;
