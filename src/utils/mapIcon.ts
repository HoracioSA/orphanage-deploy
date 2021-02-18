import Leaflet from 'leaflet'
import MapmarkerImg from '../../public/images/map-marker.svg'
const mapIcon =Leaflet.icon({
    iconUrl: MapmarkerImg,
    iconSize:[58, 68],
    iconAnchor:[29,68],
    popupAnchor:[170, 2]
})
export default mapIcon;