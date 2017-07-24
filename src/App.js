import React, { Component } from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import ReduxThunk from 'redux-thunk'
import firebase from "firebase"
import reducers from "./reducers"
import LoginForm from "./components/LoginForm"

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCiKkH_W3ZKf59j-70q7JHS53epd0nOIMw",
      authDomain: "rn-manager-626ac.firebaseapp.com",
      databaseURL: "https://rn-manager-626ac.firebaseio.com",
      projectId: "rn-manager-626ac",
      storageBucket: "rn-manager-626ac.appspot.com",
      messagingSenderId: "446869484198"
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm/>
      </Provider>
    )
  }
}

export default App