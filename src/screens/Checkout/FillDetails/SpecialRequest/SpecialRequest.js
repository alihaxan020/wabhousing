import * as React from 'react';
import {
  Container,
  Icon,
  Section,
  TextField,
} from '../../../../components/elements';
import ListRowItem from '../../../../components/elements/List/ListRowItem';
import styles from './styles';

const SpecialRequest = () => {
  const [isInputFieldVisible, setIsInputFieldVisible] = React.useState(false);

  const onRowItemPress = () => {
    setIsInputFieldVisible(!isInputFieldVisible);
  };

  return (
    <Section title="Special Reques">
      <ListRowItem
        title="Add Special Request"
        rightElement={
          <Icon
            name={isInputFieldVisible ? 'md-remove' : 'add'}
            useIonicons
            size={20}
          />
        }
        onPress={onRowItemPress}
      />
      {isInputFieldVisible && (
        <Container style={styles.textFieldContainer}>
          <TextField placeholder="Your special requests..." />
        </Container>
      )}
    </Section>
  );
};

export default SpecialRequest;
