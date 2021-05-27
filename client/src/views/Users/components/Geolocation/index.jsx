import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import { useIntl } from "react-intl";

import { LocationIcon, LocationUserIcon, currentLocation } from "./constants";
import { StyledContainer } from "./styled-components";

const Geolocation = ({ positions, tooltipLabel }) => {
    const [coordinates, setCoordinates] = useState(currentLocation);
    const [loggedUserLocation, setLoggedUserLocation] = useState({
        lat: null,
        lng: null,
    });
    const intl = useIntl();

  useEffect(() => {
    if (Object.keys(positions).length) {
      const location = { lat: positions._lat, lng: positions._long };
      setCoordinates(location);
    }
    navigator.geolocation.getCurrentPosition(function (position) {
      setLoggedUserLocation({
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      });
    });
  }, [positions, positions._lat, positions._long]);
  return (
    <StyledContainer>
      <MapContainer center={currentLocation} zoom={8}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker id={1} position={coordinates} icon={LocationIcon}></Marker>

        <Marker id={2} position={loggedUserLocation} icon={LocationUserIcon}>
          <Tooltip>{intl.formatMessage({ id: tooltipLabel })}</Tooltip>
        </Marker>
      </MapContainer>
    </StyledContainer>
  );
};
Geolocation.propTypes = {
  position: PropTypes.array,
  tooltipLabel: PropTypes.string
};

export default Geolocation;
