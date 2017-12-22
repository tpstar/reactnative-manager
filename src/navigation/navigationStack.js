import { StackNavigator } from "react-navigation";
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';
import EmployeeEdit from '../components/EmployeeEdit';

const navigator = StackNavigator({
  Login: { screen: LoginForm },
  EmployeeList: { screen: EmployeeList },
  EmployeeCreate: { screen: EmployeeCreate },
  EmployeeEdit: { screen: EmployeeEdit }

});

export default navigator;
