 
import types from "./actionTypes";

const INITIAL_STATE = {
 
  lists: [
     
  ],
};

const EmployeeReducer = (currentState = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {

    case types.UPDATE_EMPLOYEE_LIST:
      return {
        ...currentState,
        lists: payload,
      };
   
    case types.DELETE_EMPLOYEE:
      return {
        ...currentState,
        lists: currentState.lists.filter((item) => item.id !== payload),
      };

    case types.ADD_EMPLOYEE:
      return {
        ...currentState,
        lists: [payload, ...currentState.lists],
      };

    case types.UPDATE_EMPLOYEE:
      return {
        ...currentState,
        lists: currentState.lists.map((item) => (item.id !== payload.listId ? item : payload.newList)),
      };

    
 
    default:
      return currentState;
  }
};

export default EmployeeReducer;
