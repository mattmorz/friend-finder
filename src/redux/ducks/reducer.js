import { ADD_FRIEND, REMOVE_FRIEND, SEARCH_FRIEND, SORT_BY_NAME} from "../actionTypes.js";
import { initialState } from "../data.js";

const friendReducer = (state = initialState, action) => {
  let friends = state.friends;//array of objects
  let index = null;
  let id = null;
  let name = "";
  
  //action.payload contains the data submitted from the event such as id, and full_name
  if(action.payload){
    let vals = Object.values(action.payload);//returns array containing values
    console.log(action.payload);
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
    case SORT_BY_NAME:
        // Copy the data array and sort it by full names
        let sortedData =[...state.friends].sort((a, b) => (a.full_name > b.full_name) ? 1: -1);
        if(action.payload.sortBy == 0)sortedData =[...state.friends].sort((a, b) => (a.full_name < b.full_name) ? 1: -1);
        return { ...state, friends: sortedData };
    default:
      return state;
  }
};
export default friendReducer;
