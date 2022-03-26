import * as React from 'react';
import {Image, View} from 'react-native';
import {
  Container,
  Divider,
  Rating,
  Section,
  Text,
} from '../../../components/elements';
import ListRowItem from '../../../components/elements/List/ListRowItem';
import {Review} from '@src/data/types';
import styles from './styles';

const ReviewSection = ({reviews}) => {
  return (
    <Section title="Reviews" actionButtonText="View all">
      <Container style={styles.container}>
        {reviews.map((item, index) => {
          const {userAvatar, userName, review, lastUpdated, ratings} = item;
          const isLastItem = index === reviews.length - 1;
          return (
            <View key={index}>
              <ListRowItem
                title={userName}
                subTitle={`Last updated ${lastUpdated}`}
                leftElement={
                  <Image source={userAvatar} style={styles.userAvatar} />
                }
                rightElement={
                  <View style={styles.ratingContainer}>
                    <View style={styles.ratingPointContainer}>
                      <Text isPrimary isBold>
                        {ratings}
                      </Text>
                      <Text> / 10</Text>
                    </View>
                    <Rating value={ratings / 2} itemSize={14} readonly />
                  </View>
                }>
                <Text>{review}</Text>
              </ListRowItem>
              {!isLastItem && <Divider />}
            </View>
          );
        })}
      </Container>
    </Section>
  );
};

export default ReviewSection;
