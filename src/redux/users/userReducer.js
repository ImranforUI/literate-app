import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./user.actionTypes";


export const USERS_FEATURE_KEY = 'user';

let initialState = {
  loading : false,
  errorMessage : '',
  user : {},
  admin : []
};

let usersReducer = (state = initialState , action) => {
  let {type , payload} = action;
  switch(type) {
      // Register a User
      case REGISTER_USER_REQUEST:
          return{
              ...state,
              loading: true
          };
      case REGISTER_USER_SUCCESS:
          return {
              ...state,
              loading: false,
              user: payload
          };
      case REGISTER_USER_FAILURE:
          return {
              ...state,
              loading: false,
              errorMessage: payload
          };

      // Fetch a User
      case FETCH_USER_REQUEST:
          return{
              ...state,
              loading: true
          };
      case FETCH_USER_SUCCESS:
          return {
              ...state,
              loading: false,
              user : payload
          };
      case FETCH_USER_FAILURE:
          return {
              ...state,
              loading: false,
              errorMessage: payload
          };
      // Login User
      case LOGIN_USER_REQUEST:
          return{
              ...state,
              loading : true
          };
      case LOGIN_USER_SUCCESS :
          return {
              ...state,
              loading : false,
              admin : payload
          };
      case LOGIN_USER_FAILURE:
          return{
              ...state,
              loading : false,
              errorMessage : payload
          }          
      default : return state;
  }
};

export {usersReducer};