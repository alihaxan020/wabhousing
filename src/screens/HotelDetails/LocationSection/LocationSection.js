import * as React from 'react';
import {Section} from '../../../components/elements';
import LocationMapView from './LocationMapView';
import PlaceTab from './PlaceTab';

const LocationSection = () => {
  return (
    <Section title="Location">
      <LocationMapView />
      <PlaceTab />
    </Section>
  );
};

export default LocationSection;
