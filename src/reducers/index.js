import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavigationReducer from './NavigationReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  NavigationReducer,
})
