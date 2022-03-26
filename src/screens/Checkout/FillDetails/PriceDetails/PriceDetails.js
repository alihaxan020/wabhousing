import * as React from 'react';
import {Container, Icon, Section, Text} from '../../../../components/elements';
import ListRowItem from '../../../../components/elements/List/ListRowItem';
import styles from './styles';

const PriceDetails = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const onListItemPress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Section title="Price Details">
      <ListRowItem
        title="Total Price"
        leftElement={<Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} />}
        rightElement={
          <Text numberOfLines={1} isBold isPrimary>
            $1.318.275
          </Text>
        }
        rightContainerStyle={styles.rightElementContainerStyle}
        onPress={onListItemPress}
      />
      {isExpanded && (
        <Container>
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
            rightElement={
              <Text numberOfLines={1} isSecondary>
                Included
              </Text>
            }
            containerStyle={styles.expandedRowContainerStyle}
            rightContainerStyle={styles.rightElementContainerStyle}
          />
        </Container>
      )}
    </Section>
  );
};

export default PriceDetails;
