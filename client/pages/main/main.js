import React, { Component } from "react"
import styled from 'styled-components'
import MapView from './map'

class MainPage extends Component {

  componentDidMount() {
    this.props.fetchRequested()
  }

  render() {
    return(
      <div>
        <Header></Header>
        <Container>
          <Main>
            <MapView {...this.props}/>
          </Main>
          <Aside>

          </Aside>
        </Container>
      </div>
    )
  }
}

const Header = styled.header`
  height: 10vh;
  width: 100vw;
`

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const Main = styled.main`
  width: 80vw;
  height: 90vh;
`

const Aside = styled.aside`
  width: 20vw;
  height: 90vh;
`

export default MainPage