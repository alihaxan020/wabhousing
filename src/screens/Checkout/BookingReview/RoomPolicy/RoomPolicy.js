import * as React from 'react';
import {Container, Section, Text} from '../../../../components/elements';
import styles from './styles';

const RoomPolicy = () => {
  return (
    <Section title="Hotel & Room Policy">
      <Container style={styles.container}>
        <Text isHeadingTitle>Cancellation policy applies</Text>
        <Text hasMargin>This reservation is non-refindable.</Text>
        <Text>
          Times displayed are based on the accomodation's local time. Stay
          period and room/unit type are non-changeable.
        </Text>
      </Container>
    </Section>
  );
};

export default RoomPolicy;
