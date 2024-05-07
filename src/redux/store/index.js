import { combineReducers, configureStore } from "@reduxjs/toolkit";

import preferitiReducer from "../reducer/preferitiReducer";
import companyReducer from "../reducer/companyReducer";

const rootReducer = combineReducers({
  preferiti: preferitiReducer,
  company: companyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
