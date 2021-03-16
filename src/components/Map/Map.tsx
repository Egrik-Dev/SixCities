import React from "react";
import leaflet, { LatLngExpression, LatLngTuple } from "leaflet";
import { Hotel } from "../../actions/action";
import "leaflet/dist/leaflet.css";

type OwnProps = {
  hotels: Hotel[];
};

export const Map = (props: OwnProps): JSX.Element => {
  const filterByAmsterdam = (allHotels: Hotel[]): Hotel[] => {
    return allHotels.filter(
      (hotel: Hotel): boolean => hotel.city.name === `Amsterdam`
    );
  };

  const amsterdamHotels = filterByAmsterdam(props.hotels);

  React.useEffect((): void => {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39],
    });

    const city: LatLngExpression = [52.38333, 4.9];

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
        }
      )
      .addTo(map);

    amsterdamHotels.forEach((hotel: Hotel): void => {
      const offerCords: LatLngTuple = [
        hotel.location.latitude,
        hotel.location.longitude,
      ];
      leaflet.marker(offerCords, { icon }).addTo(map);
    });
  });

  return <div id="map" style={{ height: `100%` }} />;
};
