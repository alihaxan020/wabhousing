import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  leftItem: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightItem: {
    flex: 2,
    alignItems: 'flex-end',
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  content: {
    flex: 11,
  },
  titleText: {
    textAlign: 'left',
  },
  subTitle: {
    textAlign: 'left',
  },
  note: {
    fontSize: 12,
    textAlign: 'left',
  },
  body: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
