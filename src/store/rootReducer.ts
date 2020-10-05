import { combineReducers } from "redux";
import { languages } from "./languages/reducers";
import { search } from "./search/reducers";

const rootReducer = combineReducers({ search, languages });

export default rootReducer;
