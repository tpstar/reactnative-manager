import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    // this.createDataSource(this.props);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.createDataSource(nextProps)
  // }

  // createDataSource({ employees }) {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });
  //
  //   this.dataSource = ds.cloneWithRows(employees);
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
    console.log(this.props);

    return (
      <FlatList
        data={this.props.employees}
        renderItem={({item}) => <ListItem employee={item} navigation={this.props.navigation}/>}
        keyExtractor={(item)=>item.id}
      />
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // {shift: 'Monday', name: 'S', id: 'kl;djs;'}
  })
  return { employees };
}

export default connect(mapStateToProps, {
  employeesFetch
 })(EmployeeList);
