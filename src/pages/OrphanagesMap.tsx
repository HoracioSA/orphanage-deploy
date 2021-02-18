import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import MapmarkerImg from '../../public/images/map-marker.svg'
import '../styles/pages/orphanages-map.css'
import mapIcon from '../utils/mapIcon';
import api from '../services/api';
interface Orphanage {
    id: number;
    latitude: number;
    longitude:number;
    name:string
}
 function OrphanagesMap(){
     const [orphanages, setOrphanages] =useState<Orphanage[]>([]);
     console.log(orphanages)
    useEffect(()=>{
        api.get('orphanages').then(response =>{
           setOrphanages(response.data)
          
        })
    },[])
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={process.env.PUBLIC_URL + MapmarkerImg} alt="Map marker"/>
                    <h2>Choose a orphanage in map</h2>
                    <p>Many childrens are waighting for your visit</p>
                </header>
                <footer>
                    <strong>Dniporo</strong>
                    <span>Kirova3</span>
                </footer>
            </aside>
            <Map 
                center={[48.4532987,34.9017266]}
                zoom={13}
                style={{width:'100%', height:'100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
               {orphanages.map(orphanage=>{
                   return (
                    <Marker
                    icon={mapIcon}
                      position={[orphanage.latitude,orphanage.longitude]}
                      key={orphanage.id}
                    >
                        <Popup 
                        closeButton={false} 
                        minWidth={240} 
                        maxWidth={240}
                        className="map-popup"
                        >{orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                        </Popup>
                    </Marker>
            
                   )
               })}
            </Map>
            
            <Link to="/orphanages/create" className="create-orphanages">
                <FiPlus size={32} color="#fff"/>
            </Link>

        </div>
    )
}
export default OrphanagesMap;