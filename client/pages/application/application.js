import React, { Component } from "react"
import LoginPage from '../login/loginContainer'

class Application extends Component {
  render() {
    const { token } = this.props.application
    const page = token ? <LoginPage /> : <LoginPage />
    return(
      page
    )
  }
}

export default Application