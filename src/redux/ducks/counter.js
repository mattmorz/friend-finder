const ADD_FRIEND = "ADD_FRIEND";
const REMOVE_FRIEND = "REMOVE_FRIEND";

export const addFriend = (param) => ({
  id: param,
  type: ADD_FRIEND
});

export const removeFriend = (param) => ({
  id: param,
  type: REMOVE_FRIEND
});

const initialState = {
  number_of_friends: 0,
  friends: [
      {
          "id":1,
          "name": "Matt Morales",
          "short_bio": "I use fingers a lot.",
          "is_friend": false
      },
      {
          "id":2,
          "name": "Zayin Gomez",
          "short_bio": "Registered Nurse.",
          "is_friend": false
      },
      {
          "id":3,
          "name": "Zed Morales",
          "short_bio": "Cries a lot.",
          "is_friend": false
      },
  ]
};

export default (state = initialState, action) => {
  let friends = initialState.friends;
  let index = null;
  for (var i = 0; i < friends.length; i++){
    if (friends[i].id == action.id){
      index = i;
    }
  }
  switch (action.type) {
    case ADD_FRIEND:
      friends[index]['is_friend'] = true;
      return { ...state, number_of_friends: state.number_of_friends + 1, friends: state.friends};
    case REMOVE_FRIEND:
      friends[index]['is_friend'] = false;
      return { ...state, number_of_friends: state.number_of_friends - 1, friends: state.friends};
    default:
      return state;
  }
};
