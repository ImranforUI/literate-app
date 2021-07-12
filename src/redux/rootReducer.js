import { combineReducers } from "redux";
import { usersReducer, USERS_FEATURE_KEY } from "./users/userReducer";

let rootReducer = combineReducers({
    [USERS_FEATURE_KEY]: usersReducer
});

export {rootReducer}