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
            <Card />
          </Main>
        </Container>
      </div>
    )
  }
}

const Header = styled.header`
  height: 10vh;
  width: 100vw;
  z-index: 500;
  -webkit-filter: drop-shadow(0px 3px 10px rgba(0,0,0,.5));
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
  background: #153d61
`

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const Main = styled.main`
  width: 100vw;
  height: 90vh;
  position: relative;
  z-index: 499;
`

const Aside = styled.aside`
  width: 20vw;
  height: 90vh;
`

const Card = styled.div`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: white
  z-index: 500;
  border-radius: 10px;
  -webkit-filter: drop-shadow(0px 3px 5px rgba(0,0,0,.5));
  filter: drop-shadow(0px 0px 5px rgba(0,0,0,.5));
`

export default MainPage