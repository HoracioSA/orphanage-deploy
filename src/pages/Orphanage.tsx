import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo} from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import foto1 from '../../public/images/foto1.jpg';
import foto2 from '../../public/images/foto2.jpg';
import foto3 from '../../public/images/foto3.jpg';
import foto4 from '../../public/images/foto4.jpg';
import foto5 from '../../public/images/foto5.jpg';

import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";
import '../styles/pages/orphanage.css';

interface Orphanage {
  latitude: number;
  longitude:number;
  name:string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images:Array<{
    id:number
    url:string
  }>;
  // Or
  // images:{
  //   path:string
  // }[] 

}
interface Orphanage_Route_Params{
  id:string;
}
export default function Orphanage() {
  // const params = useParams<Orphanage_Route_Params>();
  // const [orphanage, setOrphanage]=useState<Orphanage>();
  // const [activeImageIndex, setActiveImageIndex]=useState(0)
  // useEffect(()=>{
  //   api.get(`orphanages/${params.id}`).then(response=>{
  //     setOrphanage(response.data)
  //   })
  // },[params.id]);
  // // if(!orphanage){
  // //   return <p>Loading...</p>
  // // }
  return (
    <div id="page-orphanage">
        <Sidebar/>
      <main>
        <div className="orphanage-details">
          <img src={foto1} alt="orpanage" />

          <div className="images">
                <button 
                className='active' 
                type="button"
                >
              <img src={foto2} alt="orpanage" />
            </button>
            <button  
                type="button"
                >
              <img src={foto3} alt="orpanage" />
            </button>
            <button 
                type="button"
                >
              <img src={foto3} alt="orpanage" />
            </button>
            <button 
                type="button"
                >
              <img src={foto5} alt="orpanage" />
            </button>
            
          </div>
          
          <div className="orphanage-details-content">
          <h1>Dnipro1</h1>
          <p>Came and your hepl is necessary for homeless peaples</p>

            <div className="map-container">
              <Map 
                center={[48.456710, 35.075938]} 
                zoom={12} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={mapIcon} position={[48.456710, 35.075938]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${48.456710},${35.075938}`}>Check out on Google Maps</a>
              </footer>
            </div>

            <hr/>
            <h2>Instructions for visiters</h2>
            <p>Just contact us ba calling us or via email: hraciosapato2015hcs@gmail.com</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                From Monday to Friday <br />
                from 11:00 to 12:30
              </div>
                <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                On weekends we are <br />
                Oppen
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Contact us on whatsapp
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}