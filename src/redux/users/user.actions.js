import Axios from "axios";
import { setAuthToken } from "../../util/setAuthToken";
import { GET_USER_INFO_FAILURE, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./user.actionTypes";

//Register User
let registerUser = (user, history) => {
    return async (dispatch) => {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            dispatch({ type: REGISTER_USER_REQUEST });
            let dataUrl = 'http://127.0.0.1:5000/users/register';
            let response = await Axios.post(dataUrl, JSON.stringify(user), config);
            dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
            history.push('/login')
        }
        catch (error) {
            console.error(error);
            dispatch({ type: REGISTER_USER_FAILURE, payload: error });
        }
    }
};

// get User Info
let getUserInfo = () => {
    return async (dispatch) => {
        try {
            if (localStorage.token) {
                setAuthToken(localStorage.getItem('token'));
            }
            dispatch({ type: GET_USER_INFO_REQUEST });
            let dataUrl = 'http://127.0.0.1:5000/users/';
            let response = await Axios.get(dataUrl);
            dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.data });
        }
        catch (error) {
            console.error(error);
            dispatch({ type: GET_USER_INFO_FAILURE, payload: error });
        }
    }
};

// login User
let loginUser = (user, history) => {
    return async (dispatch) => {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            dispatch({ type: LOGIN_USER_REQUEST });
            let dataurl = 'http://127.0.0.1:5000/users/login';
            let response = await Axios.post(dataurl, JSON.stringify(user), config);
            dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
            if (localStorage.token) {
                dispatch(getUserInfo());
            }
            history.push('/display');
        }
        catch (error) {
            console.error(error);
            dispatch({ type: LOGIN_USER_FAILURE, payload: error });
        }
    }
};

// logout
let logout = (history) => {
    return async (dispatch) => {
        try{
            dispatch({type : LOGOUT_USER});
            history.push('/');

        }
        catch (error){
            console.log(error);
        }
    }
};

export { registerUser, getUserInfo, loginUser, logout };
