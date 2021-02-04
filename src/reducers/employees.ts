import { Employee } from '../store/configureStore';

enum TasksActionTypes {
    GetEmployees = 'GET_EMPLOYEES',
    GetEmployeesSuccess = 'GET_EMPLOYEES_SUCCESS',
    GetEmployeesFailed = 'GET_EMPLOYEES_FAILED',
    AddEmployee = 'ADD_EMPLOYEE',
    EditEmployee = 'EDIT_EMPLOYEE',
    DeleteEmployee = 'DELETE_EMPLOYEE', 
}

export const initialState = [];

export interface TaskActionType {
    type: TasksActionTypes;
    payload?: Employee;
    items?: Employee[];
}

export const actions = {
    getEmployees: (): TaskActionType => ({ type: TasksActionTypes.GetEmployees }),
    addEmployees: (employee: Employee): TaskActionType => ({ type: TasksActionTypes.AddEmployee, payload: employee }),
};

export default (state: Employee[] = initialState, action: TaskActionType): Employee[] => {
    switch (action.type) {
        case TasksActionTypes.GetEmployeesSuccess:
            return action.items!;
        case TasksActionTypes.AddEmployee:
            return state.concat([action.payload!]);
        default:
            return state;
    }
};
