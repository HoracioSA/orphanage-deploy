import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Map, Marker, TileLayer, } from 'react-leaflet';
import {LeafletMouseEvent } from 'leaflet';
import { FiPlus } from "react-icons/fi";
// import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/create-orphanage.css';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

export default function CreateOrphanage() {
  const history =useHistory()
  const [position, setPosition]= useState({latitude:0, longitude:0})
  const [name, setName]=useState('')
  const [about, setAbout]=useState('')
  const [instructions, setInstructions]=useState('')
  const [opening_hours, setOpeningHours]=useState('')
  const [open_on_weekends, setOpen_On_Weekends]=useState(true)
  const [images, setImages]=useState<File[]>([])
  const [previewimages, setPreviewImages]=useState<string[]>([])

  function handleMapClick (e:LeafletMouseEvent){
    const {lat, lng}= e.latlng
    setPosition({
      latitude:lat,
      longitude:lng
    });
  }
  function handleSelectImages(event: ChangeEvent<HTMLInputElement>){
    if(!event.target.files){
      return;
    }
    const selectedImages=Array.from(event.target.files)
    setImages(selectedImages);
    const selectedImagesPreview=selectedImages.map(image=>{
      return URL.createObjectURL(image)
    });
    setPreviewImages(selectedImagesPreview)
  }
 async function handleSubmit(e:FormEvent){
    e.preventDefault()
    const {latitude, longitude}=position;
    const data =new FormData()
    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('position', String(position));
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    images.forEach(image=>{
      data.append('images',image);
    })
    await api.post('orphanages', data);
    alert('You have registered successfuly!')
    history.push('/app')
        }

  return (
    <div id="page-create-orphanage">
     <Sidebar/>

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Data</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              {position.latitude !== 0 && (
                <Marker 
                interactive={false} 
                icon={mapIcon} 
                position={[
                  position.latitude,
                  position.longitude]} 
                  />
              )
              // ? 
              // <Marker interactive={false} icon={mapIcon} position={[position.latitude,position.longitude]} /> :null
            }
            </Map>

            <div className="input-block">
              <label htmlFor="name" >Name</label>
              <input 
              id="name" 
              value={name} 
              onChange={event => setName(event.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="about">Obout <span>Maxmum 1000 characteres</span></label>
              <textarea id="name" maxLength={1000} 
              value={about}
              onChange={event=> setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Photos</label>

              <div className="images-container">
                {previewimages.map(image=>{
                  return <img key={image} src={image} alt={name}/>
                })}
              <label htmlFor="image[]" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </label> 
              </div>
              <input multiple onChange={handleSelectImages} type="file" id="image[]"/>
    
            </div>
          </fieldset>

          <fieldset>
            <legend>Visit</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instructions</label>
              <textarea 
              id="instructions" 
              value={instructions}
              onChange={event=> 
              setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Working time</label>
              <input id="opening_hours" 
              value={opening_hours}
              onChange={event=> 
              setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Do you oppen on weekends</label>

              <div className="button-select">
                <button 
                type="button" 
                className={open_on_weekends ? "active":''}
                onClick={()=>setOpen_On_Weekends(true)}
                >
                  Yes
                  </button>
                <button 
                type="button"
                className={!open_on_weekends ? "active":''}
                onClick={()=>setOpen_On_Weekends(false)}
                >
                  
                  No
                  </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
