import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  render() {
    const { employee, navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('EmployeeCreate', { employee: this.props.employee })}
          //In EmployeeCreate, this.props.employee can be called by this.props.navigation.state.params.employee
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {employee.name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;
