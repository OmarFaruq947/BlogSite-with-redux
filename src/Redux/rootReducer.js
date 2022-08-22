import { combineReducers } from "redux";
import reducer from "./Filter/filterReducer";

const rootReducer = combineReducers({
    filter: reducer,
});

export default rootReducer;