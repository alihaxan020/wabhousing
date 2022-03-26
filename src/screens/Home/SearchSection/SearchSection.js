import * as React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {
  Container,
  SearchBar,
  Touchable,
  Text,
  Icon,
  Button,
} from '../../../components/elements';
import useThemeColors from '../../../custom-hooks/useThemeColors';
import {useTheme} from '@react-navigation/native';
import dayjs from 'dayjs';
const SearchSection = () => {
  const {colors} = useTheme();
  const [checkInDate, setCheckInDate] = React.useState(dayjs().toDate());
  const [checkOutDate, setCheckOutDate] = React.useState(dayjs().toDate());
  const [stayDuration, setStayDuration] = React.useState(1);

  const [showDatePickerModal, setShowDatePickerModal] = React.useState(false);
  const [showStayDurationModal, setShowStayDurationModal] =
    React.useState(false);
  const [showRoomPickerModal, setShowRoomPickerModal] = React.useState(false);

  const {border, background} = useThemeColors();
  const onChooseDatePress = () => {
    setShowDatePickerModal(true);
  };
  const _onButtonActionPress = () => {
    console.log("'HotelListScreen', {title: 'Popular Near You'}");
  };
  const onChooseStayDurationPress = () => {
    setShowStayDurationModal(true);
  };

  const onChooseRoomPress = () => {
    setShowRoomPickerModal(true);
  };

  return (
    <Container style={styles.wrapper}>
      <SearchBar placeholder="Where are you going?" style={styles.searchBar} />
      <View
        style={[
          styles.searchInfo,
          {
            backgroundColor: background,
          },
        ]}>
        <Touchable onPress={onChooseDatePress} style={styles.searchInfoContent}>
          <View style={[styles.dateInfo, {borderRightColor: border}]}>
            <Text isSecondary>Check-in Date</Text>
            <Text isBold hasMargin>
              {dayjs(checkInDate).format('DD/MM/YYYY')}
            </Text>
          </View>
        </Touchable>
        <Touchable
          onPress={onChooseStayDurationPress}
          style={styles.searchInfoContent}>
          <View style={styles.roomInfo}>
            <Text isSecondary>Check Out</Text>
            <Text isBold hasMargin>
              {dayjs(checkInDate).format('DD/MM/YYYY')}
            </Text>
          </View>
        </Touchable>
      </View>
      <View
        style={[
          styles.chooseRoomRowItem,
          {
            backgroundColor: background,
          },
        ]}>
        <Icon
          size={35}
          name="people-circle"
          useIonicons
          style={{paddingLeft: 10}}
        />
        <Text isBold isHeadingTitle>
          Guests
        </Text>
        <View style={[styles.counterBtn, {borderColor: colors.primary}]}>
          <Icon size={20} name="plus" isPrimary />
        </View>
        <Text isBold isHeadingTitle>
          0
        </Text>
        <View style={[styles.counterBtn, {borderColor: colors.primary}]}>
          <Icon size={20} name="minus" isPrimary />
        </View>
      </View>
      <Button
        style={styles.searchButton}
        value="Search Hotels"
        onPress={_onButtonActionPress}
      />
    </Container>
  );
};

export default SearchSection;
