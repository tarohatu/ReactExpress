import React, { Component } from "react"
import styled from 'styled-components'

class LoginPage extends Component {
  render() {
    const { id, password } = this.props.login
    const { idChanged, passwordChanged, loginRequested } = this.props
    return(
      <Wrapper>
        <Card>
          <Input placeholder="ID" value={ id } onChange={(e)=> { idChanged(e.target.value) }}/>
          <Input placeholder="Password" type="password" value={ password } onChange={(e) => { passwordChanged(e.target.value)}}/>
          <Button onClick={loginRequested}>ログインする</Button>
        </Card>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #F3F4F5
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 60vw;
  border: 1px solid lightgray;
  border-radius: 10px;
  background: white;
`

const Button = styled.button`
  height: 40px;
  width: 50.5vw;
  font-size: 16px;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em 1em;
  background: palevioletred;
  color: white;
  border: 1px solid palevioletred;
`

const Input = styled.input`
  height: 30px;
  width: 48vw;
  font-size: 16px;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em 1em;
  border: 1px solid #F3F4F5;
`

export default LoginPage