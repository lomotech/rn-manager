// import
import React from "react"
import { Router, Scene } from "react-native-router-flux"
import LoginForm from "./components/LoginForm"

// component
const RouterComponent = () => {

  const getSceneStyle = (props, computedProps) => {
    const style = {
      backgroundColor: "blue"
    }

    return style
  }
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key="login"
        component={LoginForm}
        title="Please Login"
      />
    </Router>
  )
}

export default RouterComponent
