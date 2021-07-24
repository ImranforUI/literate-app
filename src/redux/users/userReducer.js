import { GET_USER_INFO_FAILURE, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./user.actionTypes";


export const USERS_FEATURE_KEY = 'user';

let initialState = {
    loading : false,
    users : null,
    token : null,
    isAuthenticated : false,
    errorMessage : null
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
              users: payload
          };
      case REGISTER_USER_FAILURE:
          return {
              ...state,
              loading: false,
              errorMessage: payload
          };

      // Fetch a User
      case GET_USER_INFO_REQUEST:
          return{
              ...state,
              loading: true
          };
     
      case GET_USER_INFO_SUCCESS:
          localStorage.setItem('user' , JSON.stringify(payload));
          return {
              ...state,
              loading: false,
              users : payload,
              isAuthenticated : true
          };
         
      case GET_USER_INFO_FAILURE:
          localStorage.removeItem('user');
          return {
              ...state,
              loading: false,
              errorMessage: payload,
              users : null
          };
       

      // Login User
      case LOGIN_USER_REQUEST:
          return{
              ...state,
              loading : true
          };
        

      case LOGIN_USER_SUCCESS :
        localStorage.setItem('token' , payload.token);
          return {
              ...state,
              loading : false,
              token : payload.token,
              isAuthenticated : true
          };
        

      case LOGIN_USER_FAILURE:
          localStorage.removeItem('token');
          return{
              ...state,
              loading : false,
              errorMessage : payload,
              isAuthenticated : false,
              token : null
          }         
      case  LOGOUT_USER :
          localStorage.removeItem('token');
          localStorage.removeItem('user') 
      return{
            ...state,
            isAuthenticated : false,
            token : null,
            users : null
      }
      default : return state;
  }
};

export {usersReducer};