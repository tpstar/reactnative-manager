import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation'

class EmployeeList extends Component {
  // navigate = () => {
  //  console.log('I am in navigate')
  //  const navigateToCreateEmployeePage = NavigationActions.navigate({
  //    routeName: 'EmployeeCreate'
  //  })
  //  this.props.navigation.dispatch(navigateToCreateEmployeePage);
  // }

  static navigationOptions = ({ navigation }) => {
     const navigateToCreateEmployeePage = NavigationActions.navigate({
       routeName: 'EmployeeCreate'
     })
    return {
      title: "Employees",
      headerRight: <Button title="Add" onPress={() => navigation.dispatch(navigateToCreateEmployeePage)}/>
    }
  };
  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    )
  }
}

export default EmployeeList;
