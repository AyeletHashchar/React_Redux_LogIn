import {combineReducers} from "redux";
import UserReducer from "./userReducer";


const rootReducer=combineReducers({
    UserReducer
});
export type storeType=ReturnType<typeof rootReducer>;
export default rootReducer;