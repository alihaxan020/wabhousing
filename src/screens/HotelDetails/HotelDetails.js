import * as React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Container, Text, LoadingIndicator} from '../../components/elements';
import {Animated, InteractionManager, View} from 'react-native';
import HeadingInformation from './HeadingInformation';
import styles from './styles';
import {hotelDetails} from '../../data/stubs/hotel-stubs';
import useThemeColors from '../../custom-hooks/useThemeColors';
import RatingDetails from './RatingDetails';
import PhotoSection from './PhotoSection';
import ReviewSection from './ReviewSection/ReviewSection';
import Facilities from './Facilities/Facilities';
import LocationSection from './LocationSection/LocationSection';
import RoomTypeSection from './RoomTypeSection/RoomTypeSection';
// import {ScrollView} from 'react-native-gesture-handler';
const MAX_FOOTER_ANIMATE_INPUT_RANGE = 2000;

const HotelDetails = () => {
  const {
    description,
    averageRatingPoint,
    detailRating,
    hotelPhotos,
    reviews,
    facilities,
    price,
  } = hotelDetails;
  const {background} = useThemeColors();
  const [scrollY] = React.useState(new Animated.Value(0));
  const [roomTypeSectionY, setRoomTypeSectionY] = React.useState(0);
  const scrollViewRef = React.useRef();
  const roomTypeSectionRef = React.useRef < View > null;
  const [isNavigationTransitionFinished, setIsNavigationTransitionFinished] =
    React.useState(false);

  const footerTranslateY = React.useMemo(() => {
    return scrollY.interpolate({
      inputRange: [
        0,
        roomTypeSectionY > 200
          ? roomTypeSectionY - 200
          : MAX_FOOTER_ANIMATE_INPUT_RANGE,
      ],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
  }, [roomTypeSectionY, scrollY]);

  useFocusEffect(
    React.useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setIsNavigationTransitionFinished(true);
      });
      return () => task.cancel();
    }, []),
  );

  const handleOnScroll = Animated.event(
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
  );

  const onSelectRoomPress = () => {
    scrollViewRef.current?.scrollTo({
      x: 0,
      y: roomTypeSectionY,
      animated: true,
    });
  };

  return (
    <View style={styles.rootView}>
      <Animated.ScrollView ref={scrollViewRef} onScroll={handleOnScroll}>
        <View>
          <HeadingInformation hotelDetails={hotelDetails} scrollY={scrollY} />
          <Container style={styles.descriptionContainer}>
            <Text isSecondary>Summary</Text>
            <Text hasMargin>{description}</Text>
          </Container>
          <RatingDetails
            averageRatingPoint={averageRatingPoint}
            detailRating={detailRating}
          />
          {hotelPhotos && <PhotoSection photos={hotelPhotos} />}
          {reviews && <ReviewSection reviews={reviews} />}
          <Facilities facilities={facilities} />
          <LocationSection />

          <RoomTypeSection />
        </View>
      </Animated.ScrollView>
    </View>
  );
};
// <Facilities facilities={facilities} />
// {isNavigationTransitionFinished ? (
//   <>
//     {hotelPhotos && <PhotoSection photos={hotelPhotos} />}
//     {reviews && <ReviewSection reviews={reviews} />}

//     <LocationSection />
//     <View
//       collapsable={false}
//       onLayout={e => {
//         setRoomTypeSectionY(e.nativeEvent.layout.y);
//       }}>
//       <RoomTypeSection />
//     </View>
//   </>
// ) : (
//   <LoadingIndicator size="large" hasMargin />
// )}
export default HotelDetails;
