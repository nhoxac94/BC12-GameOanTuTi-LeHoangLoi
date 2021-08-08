import { createStore, combineReducers } from "redux";
import gameTuTiReducer from "./reducer/gameTuTiReducer";

const rootReducer = combineReducers({
  gameTuTiReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
