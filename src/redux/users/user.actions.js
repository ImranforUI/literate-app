import Axios from "axios";
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./user.actionTypes";

//Register User
let registerUser = (history , user) => {
    return async (dispatch) => {
        try {
            dispatch({ type : REGISTER_USER_REQUEST});
            let dataUrl = 'http://127.0.0.1:5000/users/register';
            let response = await Axios.post(dataUrl, user);
            dispatch({ type : REGISTER_USER_SUCCESS , payload : response.data});
            history.push('/display');
        }
        catch (error) {
            console.log(error);
            dispatch({ type : REGISTER_USER_FAILURE , payload : error});
        }
    };
};


// Fetch User data
let fetchUserData = () => {
    return  async (dispatch) => {
        try {
            dispatch({type : FETCH_USER_REQUEST});
            let dataUrl = 'http://127.0.0.1:5000/users/';
            let response = await Axios.get(dataUrl);
            dispatch({type : FETCH_USER_SUCCESS , payload : response.data});
        }
        catch (error) {
            console.error(error);
            dispatch({ type : FETCH_USER_FAILURE , payload : error});
        }
    }
  };

  // Login User 
let  loginUser = (admin , history) => {
    return async (dispatch) => {
       try{
        dispatch({type : LOGIN_USER_REQUEST});
        let dataurl = 'http://127.0.0.1:5000/users/login';
        let response = await Axios.post(dataurl , admin);
        dispatch({type : LOGIN_USER_SUCCESS , payload : response.data});
        history.push('/register');
       }
       catch (error){
           console.error(error);
           dispatch({type : LOGIN_USER_FAILURE , payload : error})
       }
    }
};

export {registerUser , fetchUserData , loginUser};
