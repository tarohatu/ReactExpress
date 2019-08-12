import React, { Component } from "react"
import LoginPage from '../login/loginContainer'
import MainPage from '../main/mainContainer'

class Application extends Component {
  render() {
    const { token } = this.props.application
    const page = token ? <MainPage /> : <LoginPage />
    return(
      page
    )
  }
}

export default Application