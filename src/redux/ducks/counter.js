const ADD_FRIEND = "ADD_FRIEND";
const REMOVE_FRIEND = "REMOVE_FRIEND";
const SEARCH_FRIEND = "SEARCH_FRIEND";

//these are actions
export const addFriend = (param) => ({
  payload: param,
  type: ADD_FRIEND
});

export const removeFriend = (param) => ({
  payload: param,
  type: REMOVE_FRIEND
});

export const searchFriend = (param) => ({
  payload: param,
  type: SEARCH_FRIEND
});

const initialState = {
  number_of_friends: 0,
  friends: [
        {
            "id":1,
            "full_name": "Matt",
            "short_bio": "I use fingers a lot.",
            "is_friend": false
        },
        {
            "id":2,
            "full_name": "Zayin",
            "short_bio": "Registered Nurse.",
            "is_friend": false
        },
        {
            "id":3,
            "full_name": "Zed",
            "short_bio": "Cries a lot.",
            "is_friend": false
        },
        {
          "id":4,
          "full_name": "Rain",
          "short_bio": "Alone",
          "is_friend": false
      },
      {
          "id":5,
          "full_name": "Thea",
          "short_bio": "First Apo",
          "is_friend": false
      },
      {
          "id":6,
          "full_name": "Ryan",
          "short_bio": "Son",
          "is_friend": false
      }
  ]
};


const counterReducer = (state = initialState, action) => {
  let friends = state.friends;
  let index = null;
  let id = null;
  let name = "";
  
  //action.payload contains the data submitted from the event such as id, and full_name
  if(action.payload){
    let vals = Object.values(action.payload);//returns array containing values
    id = vals[0];//1st element is the id
    name = vals[1];//2nd element is the name
  }
  //loop is used to get the specific Friend component id for updating
  for (var i = 0; i < friends.length; i++){
    if (friends[i].id === id){
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
    case SEARCH_FRIEND:
        //use the original state for every filter then return the filtered value
        var FilteredFriends = initialState.friends.filter(a => a.full_name.includes(name));
        return { ...state, friends: FilteredFriends};
    default:
      return state;
  }
};
export default counterReducer;
