import React from "react";
import { Marker, Popup } from "react-leaflet";
// import { VenueLocationIcon } from "./VenueLocationIcon";
import L from "leaflet";
import Icon from "./venue_location_icon.svg";

const markrIcon = new L.Icon({
  iconUrl: Icon,
  iconSize: [55, 55],
  shadowAnchor: [17, 46],
  popupAnchor: [-8, -20],
});

const Markers = ({ places }) => {
  const markers = places.map((place, i) => (
    <Marker
      key={i}
      position={[place.geometry[0], place.geometry[1]]}
      icon={markrIcon}
    >
      <Popup>
        <b>{place.name}</b>
        <p>{place.description}</p>
      </Popup>
    </Marker>
  ));

  return markers;
};

export default Markers;
