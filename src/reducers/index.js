import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import collapseReducer from "./sideBarCollapse";

const rootReducer = combineReducers({
  user: userReducer,
  collapse: collapseReducer,
});

export default rootReducer;
