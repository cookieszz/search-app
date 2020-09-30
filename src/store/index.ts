import { createStore } from "redux";
import reducers from "./reducers";

export type rootState = ReturnType<typeof reducers>;
export const store = createStore(reducers);
