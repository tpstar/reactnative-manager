import { StackNavigator } from "react-navigation";
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';

const navigator = StackNavigator({
  Login: { screen: LoginForm },
  EmployeeList: { screen: EmployeeList }
});

export default navigator;
