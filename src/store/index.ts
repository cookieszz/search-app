import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export type rootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
