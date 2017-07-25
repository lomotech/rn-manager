// import
import React from "react"
import { Router, Scene } from "react-native-router-flux"
import LoginForm from "./components/LoginForm"

// component
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please Login"/>
      </Scene>
    </Router>
  )
}

export default RouterComponent
