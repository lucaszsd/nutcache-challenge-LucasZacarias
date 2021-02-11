import { combineReducers } from "redux";

import EmployeeReducer from "./Employee/EmployeeReducer";
import ThemeReducer from "./Theme/ThemeReducer";

const rootReducer = combineReducers({
  Employee: EmployeeReducer,
  Theme: ThemeReducer,
});

export default rootReducer;
