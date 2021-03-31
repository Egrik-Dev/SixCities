import React, { useState } from "react";
import leaflet, { LatLngExpression, LatLngTuple } from "leaflet";
import { Hotel } from "../../types";
import "leaflet/dist/leaflet.css";
import { useTypedSelector } from "../../hooks/useTypesSelector";

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
  const { activeOffer } = useTypedSelector((state) => state.hotels);
  const [mapState, setMap] = useState<leaflet.Map>();
  const [pinsGroup, setPinsGroup] = useState<leaflet.LayerGroup>();

  const pin = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [27, 39],
  });

  const activePin = leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [27, 39],
  });

  const renderMarkers = (map: leaflet.Map): void => {
    const markers: leaflet.Marker[] = [];

    hotels.forEach((hotel: Hotel): void => {
      const offerCords: LatLngTuple = [
        hotel.location.latitude,
        hotel.location.longitude,
      ];

      const marker = leaflet
        .marker(
          offerCords,
          hotel === activeOffer ? { icon: activePin } : { icon: pin }
        )
        .bindPopup(
          `
          <div style="text-align: center">
            ${hotel.title}<br>
            ${hotel.type}
          </div>
          `
        );

      markers.push(marker);
    });

    const markersGroup = leaflet.layerGroup(markers);
    setPinsGroup(markersGroup);
    markersGroup.addTo(map);
  };

  const initialMap = (): void => {
    const city: LatLngExpression = [latitude, longitude];

    const map = leaflet.map(`map`, {
      center: city,
      zoom: zoom,
      zoomControl: false,
    });

    setMap(map);

    map.setView(city, zoom);

    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
        }
      )
      .addTo(map);

    renderMarkers(map);
  };

  React.useEffect((): void => {
    initialMap();
  }, []);

  React.useEffect((): void => {
    if (mapState) {
      pinsGroup?.clearLayers();
      mapState.setView([latitude, longitude], zoom);
      renderMarkers(mapState);
    }
  }, [activeOffer, hotels]);

  return <div id="map" style={{ height: `100%` }} />;
};
