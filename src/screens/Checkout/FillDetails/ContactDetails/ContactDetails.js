import * as React from 'react';
import {RadioButton, Section, Card} from '../../../../components/elements';
import styles from './styles';

const bookingOptions = [
  {
    label: "I'm booking for myself",
    value: '1',
  },
  {
    label: "I'm booking for another person",
    value: '2',
  },
];

const ContactDetails = () => {
  const _onItemPress = item => {
    console.log('_onItemPress -> item', item);
  };

  return (
    <Section title="Contact Details">
      <Card
        title="Vu Nguyen"
        subTitle="vungz@gmail.com - +84901841211"
        style={styles.rootContainer}>
        <RadioButton
          defaultValue="1"
          data={bookingOptions}
          onItemPress={_onItemPress}
        />
      </Card>
    </Section>
  );
};

export default ContactDetails;
