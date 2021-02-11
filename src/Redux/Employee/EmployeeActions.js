import types from "./actionTypes";
  
export const addEmployee = (newList) => ({
  type: types.ADD_EMPLOYEE,
  payload: newList,
});

export const deleteEmployee = (listId) => ({
  type: types.DELETE_EMPLOYEE,
  payload: listId,
});

export const updateEmployee = (listId, newList) => ({
  type: types.UPDATE_EMPLOYEE,
  payload: { listId, newList },
});

export const updateEmployeeList = (list) => ({
  type: types.UPDATE_EMPLOYEE_LIST,
  payload: list,
});


