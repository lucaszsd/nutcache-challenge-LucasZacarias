import types from "./actionTypes";

export const setUsername = (username) => ({
  type: types.SET_USERNAME,
  payload: username,
});

export const checkTask = (listId, taskId) => ({
  type: types.CHECK_TASK,
  payload: { listId, taskId },
});

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
