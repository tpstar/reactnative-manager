import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAM06YyQBYvMreTJWXfKfZWWlTBg2d8rmU",
      authDomain: "manager-253e0.firebaseapp.com",
      databaseURL: "https://manager-253e0.firebaseio.com",
      projectId: "manager-253e0",
      storageBucket: "manager-253e0.appspot.com",
      messagingSenderId: "712281371083"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App;
