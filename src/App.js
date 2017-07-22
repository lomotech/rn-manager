import React, {Component} from "react"
import {Provider} from "react-redux"
import {createStore} from "redux"
import {Text, View} from "react-native"
import firebase from "firebase"
import reducers from "./reducers"

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

export default App