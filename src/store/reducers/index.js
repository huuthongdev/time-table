import { combineReducers } from "redux";
import { mainReducer } from './main.reducer';

export const allReducers = combineReducers({
    main: mainReducer
});