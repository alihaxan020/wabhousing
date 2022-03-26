import * as React from 'react';
import {Section} from '../../../components/elements';
import RoomInfo from './RoomInfo';
import {hotelDetails} from '../../../data/stubs/hotel-stubs';
const RoomTypeSection = () => {
  const {rooms} = hotelDetails;
  return (
    <Section title="Rooms">
      {rooms.map((room, index) => {
        return (
          <RoomInfo
            key={index}
            room={room}
            isLast={index === rooms.length - 1}
          />
        );
      })}
    </Section>
  );
};

export default RoomTypeSection;
