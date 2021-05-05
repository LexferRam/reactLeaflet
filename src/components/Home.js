import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [state, setState] = useState({
    logintude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          logintude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
        console.log("*************" + JSON.stringify(state));
      },
      function (error) {
        console.log(error);
      },
      { enableHighAccuracy: true }
    );
  }, [state]);

  return (
    <div>
      <h1>Geolocation</h1>
      <p>logintude: {state.logintude}</p>
      <p>latitude : {state.latitude}</p>
      <Link
        to={{
          pathname: "/map",
          state: state,
        }}
      >
        See my location
      </Link>
    </div>
  );
}

export default Home;
