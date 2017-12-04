import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;
