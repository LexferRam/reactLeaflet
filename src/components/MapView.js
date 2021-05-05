import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import { places } from "../data.json";
import { useLocation, useHistory } from "react-router-dom";

function MapView() {
  const location = useLocation();
  const history = useHistory();
  const [state, setState] = useState({
    currentLocation: { lat: "10.491283", lng: "-66.8641882" },
    zoom: 16,
  });

  useEffect(() => {
    console.log("aqui" + JSON.stringify(location));
    if (location.state.latitude || location.state.logintude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.logintude,
      };
      setState({ ...state, currentLocation });
      console.log(state);
      history.replace({ pathname: "/map", state: {} });
    }
  }, [state]);

  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
      {" "}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers places={places} />
    </MapContainer>
  );
}

export default MapView;
