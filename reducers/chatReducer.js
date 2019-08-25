import { SEND_MESSAGE, GET_MESSAGES } from '../actions/types';

const initialState = {
  mrs_meowmers: [
    {
      _id: 0,
      createdAt: new Date(2019, 6, 6, 9, 39, 30),
      text: 'Hi! Cute dog! When is your dog available for play time?',
      user: {
        id: 2,
        name: 'Rex',
        avatar2: require('../assets/images/users/Will_S3.png'),
        username: 'mrs_meowmers'
      }
    }
  ],
  mr_meowmers: [
    {
      _id: 0,
      createdAt: new Date(2019, 6, 6, 15, 43, 23),
      text: 'Good evening! Would you like to head to the circle park now?',
      user: {
        id: 2,
        name: 'David',
        avatar2: require('../assets/images/users/tommy.jpg'),
        username: 'mr_meowmers'
      }
    }
  ],
  shiba_inu: [
    {
      _id: 0,
      createdAt: new Date(2019, 6, 6, 18, 26, 51),
      text:
        "Hey! Are we still meeting at the park in an hour? I'll bring the treats!",
      user: {
        id: 2,
        name: 'Jen',
        avatar2: require('../assets/images/users/ellen.jpg'),
        username: 'shiba_inu'
      }
    }
  ]
};

export default function(state = initialState, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case SEND_MESSAGE:
      let { username, _id, createdAt, text, user } = action.payload;
      if (!(username in stateCopy)) {
        stateCopy[username] = [];
      }
      stateCopy[username].unshift({ _id, createdAt, text, user });
      return stateCopy;
    case GET_MESSAGES:
      return stateCopy;
    default:
      return state;
  }
}
