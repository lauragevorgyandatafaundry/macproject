import { combineReducers } from "redux";
import commonReducer from "./reducers/commonReducer";

const rootReducer = combineReducers({
  marks: commonReducer,
});

export default rootReducer;
