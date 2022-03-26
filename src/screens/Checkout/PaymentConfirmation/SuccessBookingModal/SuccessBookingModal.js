import * as React from 'react';
import {View, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {Container, Text, Button, Dialog} from '../../../../components/elements';
import styles from './styles';
import {icons} from '../../../../../constants';
const BookingSuccessModal = ({isVisible, setIsVisble}) => {
  const navigation = useNavigation();
  const fadeIn = React.useRef(new Animated.Value(0)).current;
  const fadeOut = React.useRef(new Animated.Value(1)).current;
  const [isAnimationFinished, setIsAnimationFinished] = React.useState(false);
  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: isAnimationFinished ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeOut, {
      toValue: isAnimationFinished ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isAnimationFinished, fadeIn, fadeOut]);

  const _onAnimationFinish = () => {
    setIsAnimationFinished(true);
  };

  const _onBackdropPress = () => {
    setIsVisble(false);
    setIsAnimationFinished(false);
  };

  const _onBookingSomethingElseButtonPressed = () => {
    setIsVisble(false);
    navigation.navigate('HomeScreen');
  };

  const _onTrackBookingButtonPressed = () => {
    setIsVisble(false);
    navigation.dispatch(StackActions.replace('PurchaseListScreen'));
  };
  console.log();
  return (
    <Dialog isVisible={isVisible} onBackdropPress={_onBackdropPress}>
      <Container style={styles.container}>
        <View style={styles.content}>
          <LottieView
            source={icons.bookingAnimation}
            autoPlay
            loop={false}
            onAnimationFinish={_onAnimationFinish}
            style={styles.lottieView}
          />
          {!isAnimationFinished && (
            <Animated.View
              style={[styles.processingBookingContainer, {opacity: fadeOut}]}>
              <Text isBold>Processing Your Booking...</Text>
            </Animated.View>
          )}
          <Animated.View
            style={[styles.successMessageContainer, {opacity: fadeIn}]}>
            <Text isHeadingTitle isBold isPrimary>
              Thank you for your booking
            </Text>
            <Text isCenter isSecondary style={styles.successMessage}>
              You can view your booking history in the Purchase List
            </Text>
          </Animated.View>
        </View>
        <Animated.View
          style={[styles.footerButtonContainer, {opacity: fadeIn}]}>
          <Button isFullWidth onPress={_onTrackBookingButtonPressed}>
            <Text isWhite isBold>
              View My Purchase List
            </Text>
          </Button>
          <Button
            isFullWidth
            isTransparent
            style={styles.bookingSomethingButton}
            onPress={_onBookingSomethingElseButtonPressed}>
            <Text>Book Another Room</Text>
          </Button>
        </Animated.View>
      </Container>
    </Dialog>
  );
};
export default BookingSuccessModal;
