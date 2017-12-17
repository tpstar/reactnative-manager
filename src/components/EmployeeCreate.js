import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

class EmployeeCreate extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Create Employee",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    }
  };
  render() {
    return (
      <View>
        <Text>Employee Form</Text>
      </View>
    )
  }
}

export default EmployeeCreate;
