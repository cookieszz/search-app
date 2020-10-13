import { combineReducers } from "redux";
import { languages } from "store/languages/reducers";
import { search } from "store/search/reducers";

const rootReducer = combineReducers({ search, languages });

export default rootReducer;
