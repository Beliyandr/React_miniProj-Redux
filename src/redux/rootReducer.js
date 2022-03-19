//Корневой Reducer, в котором будут собираться все одельно созданые reducers

import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
  appReducer,
});
