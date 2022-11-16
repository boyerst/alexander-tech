import * as React from "react"
import PropTypes from "prop-types"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import marker from '../../../static/map-marker.png';
import { Icon } from 'leaflet'
const myIcon = new Icon({
 iconUrl: marker,
 iconSize: [60,60]
})


const MapModule = (props) => {

  const position = [45.51667, -122.66667]


  return (

    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '600px' }}>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )

}

export default MapModule





