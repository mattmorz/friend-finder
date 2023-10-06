import { ADD_FRIEND, REMOVE_FRIEND, SEARCH_FRIEND, SORT_BY_NAME} from "./actionTypes.js";

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
    payload: param,//{id:'',full_name:name}
    type: SEARCH_FRIEND
  });
  
  export const sortByName = (param) => ({
    payload: param,//{id:'',full_name:name}
    type: SORT_BY_NAME
  });
  