import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    marginVertical: '15%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  searchBar: {
    padding: 0,
  },
  searchInfo: {
    flexDirection: 'row',
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  searchInfoContent: {
    flex: 1,
  },
  dateInfo: {
    flex: 1,
    borderRightWidth: 1,
    alignItems: 'center',
  },
  roomInfo: {
    flex: 1,
    alignItems: 'center',
  },
  chooseRoomRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  searchButton: {
    marginBottom: 10,
  },
  counterBtn: {
    width: 30,
    height: 30,
    borderRadius: 20,
    paddingLeft: 5,
    borderWidth: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textFieldContainer: {
    padding: 15,
    paddingTop: 0,
    paddingBottom: 10,
  },
});
