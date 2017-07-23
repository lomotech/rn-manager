import React, {Component} from "react"
import {connect} from 'react-redux'
import {emailChanged} from "../actions"
import {Button, Card, CardSection, Input} from "./common"

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button
            title="Login"
          />
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps, {emailChanged})(LoginForm)