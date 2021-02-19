import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import MapmarkerImg from '../../public/images/map-marker.svg'
import '../styles/pages/orphanages-map.css'
import mapIcon from '../utils/mapIcon';
import api from '../services/api';
// interface Orphanage {
//     id: number;
//     latitude: number;
//     longitude:number;
//     name:string
// }
 function OrphanagesMap(){
    //  const [orphanages, setOrphanages] =useState<Orphanage[]>([]);
    //  console.log(orphanages)
    // useEffect(()=>{
    //     api.get('orphanages').then(response =>{
    //        setOrphanages(response.data)
          
    //     })
    // },[])
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapmarkerImg} alt="Map marker"/>
                    <h2>Choose a orphanage in map</h2>
                    <p>Many childrens are waighting for your visit</p>
                </header>
                <footer>
                    <strong>Dniporo</strong>
                    <span>Kirova3</span>
                </footer>
            </aside>
            <Map 
                center={[48.468803, 35.024569]}
                zoom={12}
                style={{width:'100%', height:'100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
              
                   return (
                    <Marker
                    icon={mapIcon}
                      position={[48.456710, 35.075938]}
                    >
                        <Popup 
                        closeButton={false} 
                        minWidth={240} 
                        maxWidth={240}
                        className="map-popup"
                        >Dnipro 1
                        <Link to="/orphanages">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                        </Popup>
                    </Marker>

                    <Marker
                    icon={mapIcon}
                      position={[48.479136, 34.940375]}
                    >

                        <Popup 
                        closeButton={false} 
                        minWidth={240} 
                        maxWidth={240}
                        className="map-popup"
                        >Dnipro 2
                        <Link to="/orphanages">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                        </Popup>
                    </Marker>

                    <Marker
                    icon={mapIcon}
                      position={[48.538897, 34.965745]}
                    >
                        <Popup 
                        closeButton={false} 
                        minWidth={240} 
                        maxWidth={240}
                        className="map-popup"
                        >Dnipro 3
                        <Link to="/orphanages">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                        </Popup>
                    </Marker>
                    <Marker
                    icon={mapIcon}
                      position={[48.495950, 35.129242]}
                    >
                        <Popup 
                        closeButton={false} 
                        minWidth={240} 
                        maxWidth={240}
                        className="map-popup"
                        >Dnipro 4
                        <Link to="orphanages">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                        </Popup>
                    </Marker>
                    <Marker
                    icon={mapIcon}
                      position={[48.544496, 35.008028]}
                    >
                        <Popup 
                        closeButton={false} 
                        minWidth={240} 
                        maxWidth={240}
                        className="map-popup"
                        >Dnipro 5
                        <Link to="/orphanages">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                        </Popup>
                    </Marker>
            
            </Map>
            
            <Link to="/orphanages/create" className="create-orphanages">
                <FiPlus size={32} color="#fff"/>
            </Link>

        </div>
    )
}
export default OrphanagesMap;