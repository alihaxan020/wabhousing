import * as React from 'react';
import {Container, Icon, Section, Text} from '../../../../components/elements';
import styles from './styles';

const GuestDetails = () => {
  return (
    <Section title="Guest Details">
      <Container style={styles.container}>
        <Text>Guest Name</Text>
        <Text
          hasMargin
          leftIcon={<Icon useIonicons name="person" style={styles.leftIcon} />}>
          Carl Johnson
        </Text>
      </Container>
    </Section>
  );
};

export default GuestDetails;
