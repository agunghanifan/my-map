import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';

function App() {
  const [marker, setMarker] = useState([51.505, -0.09])
  // const position = [51.505, -0.09]

  return (
    <div className="App">
      <MapContainer center={marker} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={marker}>
          <Popup>
            You clicked on a marker
          </Popup>
        </Marker>
      </MapContainer> 
    </div>
  );
}

export default App;
