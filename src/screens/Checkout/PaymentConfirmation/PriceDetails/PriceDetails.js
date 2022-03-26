import * as React from 'react';
import {Container, Section, Text} from '../../../../components/elements';
import ListRowItem from '../../../../components/elements/List/ListRowItem';
import styles from './styles';

const PriceDetails = () => {
  return (
    <Section title="Price Details">
      <Container style={styles.expandedContainer}>
        <ListRowItem
          subTitle="(1x) Superior Twin Room"
          rightElement={
            <Text numberOfLines={1} isSecondary>
              $1.318.275
            </Text>
          }
          containerStyle={styles.expandedRowContainerStyle}
          rightContainerStyle={styles.rightElementContainerStyle}
        />
        <ListRowItem
          subTitle="Accommodation Fee"
          rightElement={<Text numberOfLines={1}>Included</Text>}
          containerStyle={styles.expandedRowContainerStyle}
          rightContainerStyle={styles.rightElementContainerStyle}
        />
        <ListRowItem
          title="Total"
          rightElement={
            <Text numberOfLines={1} isBold isPrimary>
              $1.318.275
            </Text>
          }
          containerStyle={styles.expandedRowContainerStyle}
          rightContainerStyle={styles.rightElementContainerStyle}
        />
      </Container>
    </Section>
  );
};

export default PriceDetails;
