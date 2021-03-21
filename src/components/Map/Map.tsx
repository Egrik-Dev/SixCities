import React from "react";
import leaflet, { LatLngExpression, LatLngTuple } from "leaflet";
import { Hotel } from "../../actions/action";
import "leaflet/dist/leaflet.css";

type OwnProps = {
  hotels: Hotel[];
  city: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export const Map = ({ hotels, city }: OwnProps): JSX.Element => {
  const { latitude, longitude, zoom } = city;

  React.useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39],
    });

    const city: LatLngExpression = [latitude, longitude];

    let map = leaflet.map(`map`, {
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

    hotels.forEach((hotel: Hotel): void => {
      const offerCords: LatLngTuple = [
        hotel.location.latitude,
        hotel.location.longitude,
      ];

      leaflet
        .marker(offerCords, { icon })
        .addTo(map)
        .bindPopup(
          `
        <div style="text-align: center">
          ${hotel.title}<br>
          ${hotel.type}
        </div>
        `
        )
        .openPopup();
    });

    return () => {
      map.remove();
    };
  }, [hotels]);

  return <div id="map" style={{ height: `100%` }} />;
};
