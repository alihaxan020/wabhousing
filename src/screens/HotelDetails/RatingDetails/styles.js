import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ratingDetailsContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  overallRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  overallRatingPoint: {
    fontSize: 36,
    marginRight: 10,
  },
  overallRatingPointText: {
    marginBottom: 5,
  },
  ratingProgressContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  progressBarContainer: {
    flex: 1,
  },
  ratingItem: {
    width: 80,
  },
});
