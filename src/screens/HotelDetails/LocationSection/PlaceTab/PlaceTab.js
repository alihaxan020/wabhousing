import * as React from 'react';
import {Container, TabView} from '../../../../components/elements';
import NearbyPlaceTab from './Tabs/NearbyPlaceTab';
import PopularPlaceTab from './Tabs/PopularPlaceTab';
import styles from './styles';

const tabData = [
  {key: '0', title: 'Nearby Places', content: NearbyPlaceTab},
  {
    key: '1',
    title: 'Popular in the Area',
    content: PopularPlaceTab,
  },
];

const PlaceTab = () => {
  return (
    <Container>
      <TabView
        tabData={tabData}
        tabBarStyle={styles.tabBarStyle}
        isTabBarFullWidth
      />
    </Container>
  );
};

export default PlaceTab;
