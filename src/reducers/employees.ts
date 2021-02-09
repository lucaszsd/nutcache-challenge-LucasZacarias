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

export interface EditActionType {
    type: TasksActionTypes;
    payload?: Employee;
    items?: Employee[];
}

export interface DeleteActionType {
    type: TasksActionTypes;
    payload?: String; 
    items?: Employee[];
}


export const actions = {
    getEmployees: (): TaskActionType => ({ type: TasksActionTypes.GetEmployees }),
    addEmployees: (employee: Employee): TaskActionType => ({ type: TasksActionTypes.AddEmployee, payload: employee }),
    deleteEmployee: (cpf: String) : DeleteActionType => ({type: TasksActionTypes.DeleteEmployee, payload: cpf}),
    editEmployee: (employee: Employee) : EditActionType => ({type: TasksActionTypes.EditEmployee, payload: employee}),
};

export default (state: Employee[] = initialState, action: TaskActionType): Employee[] => {
    console.log(JSON.stringify(action.items))
    switch (action.type) {
        case TasksActionTypes.GetEmployeesSuccess:
            return action.items!;
        case TasksActionTypes.AddEmployee:
            return state.concat([action.payload!]);
        case TasksActionTypes.DeleteEmployee:
            return state.filter(element => element.CPF == action.payload?.CPF)
        default:
            return state;
    }
};
