import { legacy_createStore, combineReducers } from "redux";

import todos from "./reducer/todo";

const rootReducer = combineReducers({
  todos,
});

const store = legacy_createStore(rootReducer);

export default store;
