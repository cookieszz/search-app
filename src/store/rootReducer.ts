import { combineReducers } from "redux";
import { search } from "./search/reducers";

const rootReducer = combineReducers({ search });

export default rootReducer;
