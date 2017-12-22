import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { HeaderBackButton } from 'react-navigation';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
  state = { showModal: false };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Edit Employee",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    }
  };

  componentWillMount() {
    const { employee } = this.props.navigation.state.params //from ListItem.js
    _.each(employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    });
  }



  onButtonPress() {
    const { name, phone, shift } = this.props;
    const { employee } = this.props.navigation.state.params //from ListItem.js

    this.props.employeeSave({ name, phone, shift, uid: employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { employee } = this.props.navigation.state.params;
    console.log(employee.uid)
    this.props.employeeDelete(employee.uid);
  }

  onDecline() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
