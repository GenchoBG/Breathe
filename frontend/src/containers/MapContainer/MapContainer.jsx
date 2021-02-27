import React from "react";
import Map from "../../components/Map/Map";
import classes from "./MapContainer.module.scss";
import { useStoreActions, useStoreState } from "easy-peasy";

const MapContainer = (props) => {
  const {
    setEndRoute,
    setStartRoute,
    setIsSubmitted,
    setCurrentLocation,
    setWantedLocation,
  } = useStoreActions((actions) => actions.navigationStore);
  const { currentLocation, wantedLocation } = useStoreState(
    (state) => state.navigationStore
  );

  return (
    <div className={classes.Container}>
      <Map
        setEndRoute={setEndRoute}
        setIsSubmitted={setIsSubmitted}
        setStartRoute={setStartRoute}
        setCurrentLocation={setCurrentLocation}
        currentLocation={currentLocation}
        setWantedLocation={setWantedLocation}
        wantedLocation={wantedLocation}
      />
    </div>
  );
};

export default MapContainer;