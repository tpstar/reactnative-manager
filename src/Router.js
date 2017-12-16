import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';


// const RouterComponent = () => {
//   <Router>
//     <Scene key="login" component={LoginForm} title="Please Login" />
//   </Router>
// };
//
// export default RouterComponent;

export const LoginStack = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Please Login',
      // header: {
      //    style: {
      //       textAlign: 'center',
      //    },
      // },
    },
  }
});

export const EmployeeListStack = StackNavigator({
  Login: {
    screen: EmployeeList,
    navigationOptions: {
      title: 'Employees',
      // header: {
      //    style: {
      //       textAlign: 'center',
      //    },
      // },
    },
  }
});
