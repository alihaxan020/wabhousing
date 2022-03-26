import {images, icons} from '../../../constants';
export const mostSearchedHotelStubs = [
  {
    id: 1,
    image: images.homeCover,
    name: 'Ali Hassan',
    location: 'Brussel',
    price: '$800',
    ratings: '4.5',
    bed: 3,
    bath: 2,
    guestes: 5,
  },
  {
    id: 2,
    image: images.homeCover,
    name: 'Ali Hassan',
    location: 'Brussel',
    price: '$800',
    ratings: '3.5',
    bed: 3,
    bath: 1,
    guestes: 4,
  },
  {
    id: 3,
    image: images.homeCover,
    name: 'Ali Hassan',
    location: 'Brussel',
    price: '$800',
    ratings: '4',
    bed: 4,
    bath: 3,
    guestes: 5,
  },
  {
    id: 4,
    image: images.homeCover,
    name: 'Ali Hassan',
    location: 'Brussel',
    price: '$800',
    ratings: '3.8',
    bed: 6,
    bath: 3,
    guestes: 10,
  },
];

export const popularPlaceStubs = [
  {
    id: 1,
    name: 'Belgium',
    image: images.homeCover,
  },
  {
    id: 2,
    name: 'Belg',
    image: images.homeCover,
  },
  {
    id: 3,
    name: 'happy',
    image: images.homeCover,
  },
  {
    id: 4,
    name: 'Angry',
    image: images.homeCover,
  },
  {
    id: 5,
    name: 'HappyBirthday',
    image: images.homeCover,
  },
];
const hotelFacilities = [
  {
    id: '1',
    name: 'Restaurant',
    image: icons.helpDesk,
  },
  {
    id: '2',
    name: '24h Front Desk',
    image: icons.helpDesk,
  },
  {
    id: '3',
    name: 'Gym',
    image: icons.helpDesk,
  },
  {
    id: '4',
    name: 'Wifi',
    image: icons.helpDesk,
  },
  {
    id: '5',
    name: 'Minibar',
    image: icons.helpDesk,
  },
  {
    id: '6',
    name: 'Bowling',
    image: icons.helpDesk,
  },
];

const hotelRoom = [
  {
    id: 12,
    images: [
      images.logo,
      images.bg_splash,
      images.loginBg,
      images.homeCover,
      images.logo_splash,
    ],
    name: 'Superior Twin Room',
    area: '35.0 sqm - With hot water',
    descriptions: [
      {
        id: '1',
        name: '1 double bed',
        image: images.homeCover,
      },
      {
        id: '2',
        name: '2 adults',
        image: images.homeCover,
      },
    ],
    facilities: [
      {
        id: '1',
        name: 'Free breakfast',
        image: images.loginBg,
      },
      {
        id: '2',
        name: 'Free wifi',
        image: images.logo,
      },
      {
        id: '3',
        name: 'No smoking',
        image: images.logo,
      },
    ],
  },
  {
    id: 78436,
    images: [images.loginBg, images.bg_splash],
    name: 'Superior Twin Room',
    area: '35.0 sqm - With hot water',
    descriptions: [
      {
        id: '4',
        name: '1 double bed',
        image: images.logo,
      },
      {
        id: '5',
        name: '2 adults',
        image: images.logo,
      },
    ],
    facilities: [
      {
        id: '6',
        name: 'Free breakfast',
        image: images.logo,
      },
      {
        id: '7',
        name: 'Free wifi',
        image: images.logo,
      },
      {
        id: '8',
        name: 'No smoking',
        image: images.logo,
      },
    ],
  },
];
export const hotelDetails = {
  id: 1,
  name: 'Sana Ur Rehman',
  averageRatingPoint: 9.2,
  image: images.homeCover,
  isAddedToFavorites: true,
  location: `I-8, Islamabad, Pakistan`,
  price: '500$',
  ratings: 5,
  totalRatings: 4,
  coverImage: images.homeCover,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  facilities: hotelFacilities,
  rooms: hotelRoom,
  detailRating: [
    {
      id: 1,
      name: 'Room',
      ratings: 5,
    },
    {
      id: 2,
      name: 'Service',
      ratings: 8,
    },
    {
      id: 3,
      name: 'Location',
      ratings: 4,
    },
    {
      id: 4,
      name: 'Price',
      ratings: 6,
    },
  ],
  hotelPhotos: [
    {
      id: 1,
      name: 'skds',
      image: images.homeCover,
    },
    {
      id: 2,
      name: 'sjkfsk',
      image: images.homeCover,
    },
    {
      id: 3,
      name: 'skhfskds',
      image: images.homeCover,
    },
    {
      id: 4,
      name: 'skhfskds',
      image: images.homeCover,
    },
    {
      id: 5,
      name: 'kljhkk',
      image: images.homeCover,
    },
  ],
  reviews: [
    {
      id: 1,
      userName: `Ali Hassan`,
      userAvatar: images.logo,
      ratings: 10,
      review: 'This room is very nice',
      lastUpdated: '12 / 09 / 21',
    },

    {
      id: 2,
      userName: `Zain`,
      userAvatar: images.logo,
      ratings: 2.5,
      review: 'This room is very bad',
      lastUpdated: '12 / 09 / 21',
    },
    {
      id: 2,
      userName: `Sana Ur Rehman`,
      userAvatar: images.logo,
      ratings: 7,
      review: 'This room is very average',
      lastUpdated: '12 / 09 / 21',
    },
  ],

  touristAttraction: [
    {
      id: 1,
      name: 'Islamabad',
      type: 'jani',
      distance: 30,
    },
    {
      id: 2,
      name: 'Multan',
      type: 'jani',
      distance: 30,
    },
    {
      id: 3,
      name: 'Lahore',
      type: 'jani',
      distance: 30,
    },
    {
      id: 4,
      name: 'Rahim Yar Khan',
      type: 'jani',
      distance: 30,
    },

    {
      id: 5,
      name: 'Lodhran',
      type: 'jani',
      distance: 30,
    },
  ],
};
