import * as React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {
  Container,
  ProgressBar,
  Rating,
  Text,
} from '../../../components/elements';

const RatingDetails = ({averageRatingPoint, detailRating}) => {
  return (
    <Container style={styles.ratingDetailsContainer}>
      <View style={styles.overallRatingContainer}>
        <View>
          <Text isPrimary isBold style={styles.overallRatingPoint}>
            {averageRatingPoint}
          </Text>
        </View>
        <View>
          <Text style={styles.overallRatingPointText}>Overall Rating</Text>
          <Rating value={averageRatingPoint / 2} itemSize={16} readonly />
        </View>
      </View>
      {detailRating && (
        <View>
          {detailRating.map(item => {
            return (
              <View key={item.id} style={styles.ratingProgressContainer}>
                <Text style={styles.ratingItem}>{item.name}</Text>
                <View style={styles.progressBarContainer}>
                  <ProgressBar progress={item.ratings / 10} width={null} />
                </View>
              </View>
            );
          })}
        </View>
      )}
    </Container>
  );
};

export default RatingDetails;
