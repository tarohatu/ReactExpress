import React, { Component } from "react"
import Leaflet from 'leaflet'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

const position = [35.4529118, 139.4550301]
class MainPage extends Component {
  render() {
    return(
        <Map center={position} zoom={13} style={{ width: '100vw', height: '100vh' }} >
          <TileLayer
            attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
        </Map>
    )
  }
}

export default MainPage