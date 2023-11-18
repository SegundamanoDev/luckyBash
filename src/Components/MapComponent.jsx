import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({latitude, longitude, location}) => {
	const locationCoordinate = [latitude, longitude];
	return (
		<MapContainer
			center={locationCoordinate}
			zoom={13}
			style={{width: "100%", height: "300px"}}>
			<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
			<Marker position={locationCoordinate}>
				<Popup>{location}</Popup>
			</Marker>
		</MapContainer>
	);
};

export default MapComponent;
