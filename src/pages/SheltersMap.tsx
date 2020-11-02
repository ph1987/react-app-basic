import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/shelters-map.css';

function SheltersMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Puppy Map" />
                    <h2>Escolha um abrigo no mapa</h2>
                    <p>
                        Muitos animais estão esperando a sua visita :)
                    </p>
                </header>
                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>RJ</span>
                </footer>
            </aside>
            
            <Map
                center={[-22.9327058,-43.1844011]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
            {
                /* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </Map>

            <Link to="" className="create-shelter">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default SheltersMap;