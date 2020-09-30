import { createStore } from "redux";
import rootReducer from "./rootReducer";

export type rootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
