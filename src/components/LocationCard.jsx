import React from 'react'
import "./styles/locationCard.css";
const LocationCard = ({location}) => {
  return (
    <section className='location'>
        <h2 className='location-title'>{location?.name}</h2>
        <ul className='location-list'>
            <li className='location-item'><span>Type: </span> {location?.type}</li>
            <li className='location-item'><span>Dimension: </span>{
                location?.dimension }</li>
            <li className='location-item'><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </section>
  )
}

export default LocationCard