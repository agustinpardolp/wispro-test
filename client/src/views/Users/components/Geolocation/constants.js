import L from "leaflet";
import location from "../../../../assets/icons/location.svg"

export const LocationIcon = new L.Icon({
    iconUrl: location,
    iconRetinaUrl: location,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 55),
    className: 'leaflet-div-icon'
});
export const LocationUserIcon = new L.Icon({
    iconUrl: location,
    iconRetinaUrl: location,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
});

export  const currentLocation = {
    lat: -34.61315,
    lng: -58.37723,
  };