import { SEND_MESSAGE, GET_MESSAGES } from '../actions/types';

const initialState = {
  mrs_meowmers: [
    {
      _id: 0,
      createdAt: new Date(2019, 1, 6, 9, 39, 30),
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
      createdAt: new Date(2018, 6, 6, 15, 43, 23),
      text: 'Good evening! Would you like to head to the circle park now?',
      user: {
        _id: 2,
        name: 'David',
        avatar2: require('../assets/images/users/tommy.jpg'),
        username: 'mr_meowmers'
      }
    }
  ],
  shiba_inu: [
    {
      _id: 2,
      createdAt: new Date(2019, 6, 6, 14, 26, 51),
      text:
        "Hey! Are we still meeting at the park in an hour? I'll bring the treats!",
      user: {
        id: 2,
        name: 'Jen',
        avatar2: require('../assets/images/users/ellen.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 11,
      createdAt: new Date(2019, 6, 6, 8, 26, 51),
      text:
        'You are wonderful. You are incredible. You are amazing. I cannot wait to see you tomorrow',
      user: {
        _id: 1,
        name: 'Max',
        avatar2: require('../assets/images/users/max.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 10,
      createdAt: new Date(2019, 6, 4, 18, 26, 51),
      text:
        'I love having lots of fun. You are a great friend. You are very funny. Hahahahaha.',
      user: {
        _id: 2,
        name: 'Jen',
        avatar2: require('../assets/images/users/ellen.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 9,
      createdAt: new Date(2019, 6, 4, 13, 26, 51),
      text: 'hahahaha',
      user: {
        _id: 1,
        name: 'Max',
        avatar2: require('../assets/images/users/max.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 8,
      createdAt: new Date(2019, 6, 3, 13, 26, 45),
      text:
        'Just dance! We can go singing and dancing and having a good time just laughing. Haha',
      user: {
        _id: 2,
        name: 'Jen',
        avatar2: require('../assets/images/users/ellen.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 7,
      createdAt: new Date(2019, 6, 3, 13, 26, 5),
      text:
        'You are right. Do not worry, just be happy. Let it go, do not hold it back anymore. You will never see me cry. Here I stand in the light of day. The cold never bothered me anyway.',
      user: {
        _id: 1,
        name: 'Max',
        avatar2: require('../assets/images/users/max.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 6,
      createdAt: new Date(2019, 6, 2, 10, 26, 51),
      text:
        'I do not think that you should feel that way. You can do it. I believe in you. You can do great things. Shoot for the moon and land in the stars. You will shine bright like a diamond. Twinkle Twinkle.',
      user: {
        _id: 2,
        name: 'Jen',
        avatar2: require('../assets/images/users/ellen.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 5,
      createdAt: new Date(2019, 6, 2, 7, 26, 51),
      text:
        'Sometimes I just cry because I feel so sad, lonely and tired. All my worrying makes me anxious and nervous and I am disgusted with life.',
      user: {
        _id: 1,
        name: 'Max',
        avatar2: require('../assets/images/users/max.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 4,
      createdAt: new Date(2019, 6, 2, 6, 26, 51),
      text:
        'I actually like to listen to sad songs. Sometimes I cry by myself and listen to depressing music because it makes me afraid of what is in the future waiting for me.',
      user: {
        _id: 2,
        name: 'Jen',
        avatar2: require('../assets/images/users/ellen.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 3,
      createdAt: new Date(2019, 6, 2, 6, 26, 44),
      text:
        'I am so happy when it is sunny. I love to sing in my free time as well! I love going to karaoke because I like hearing other people sing and I like to belt out my favourite Justin Beiber Songs. What kind of songs do you like?',
      user: {
        _id: 1,
        name: 'Max',
        avatar2: require('../assets/images/users/max.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 2,
      createdAt: new Date(2019, 6, 2, 6, 26, 23),
      text:
        'Sounds Great! It seems like it will be sunny all of next week. I love to sing, dance and jump for joy in my spare time.',
      user: {
        _id: 2,
        name: 'Jen',
        avatar2: require('../assets/images/users/ellen.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 1,
      createdAt: new Date(2019, 6, 1, 13, 26, 51),
      text:
        'Hi Jen! Of course I would love that. I adore going on hikes. Hiking makes me happy. What are some of your other hobbies?',
      user: {
        _id: 1,
        name: 'Max',
        avatar2: require('../assets/images/users/max.jpg'),
        username: 'shiba_inu'
      }
    },
    {
      _id: 0,
      createdAt: new Date(2019, 6, 1, 10, 26, 34),
      text:
        'Hi Max, I saw your profile on BarkBuddies. Would you be interested in going on a hike with me sometime this week?',
      user: {
        _id: 2,
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
