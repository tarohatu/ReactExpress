import React, { Component } from "react"
import Leaflet from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

const center = [35.4529118, 139.4550301]
class MapView extends Component {
  render() {
    const { locations } = this.props.map
    console.log(locations)
    return(
        <Map center={center} zoom={13} style={{ width: '100vw', height: '90vh' }} >
          <TileLayer
            attribution='&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {locations.map(location => {
            const position = [location.latitude, location.longitude]
            return(
            <Marker position={position}>
              <Popup>
                {location.user.name}
              </Popup>
            </Marker>
            )
          })}
        </Map>
    )
  }
}

export default MapView