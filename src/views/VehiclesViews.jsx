import React from 'react'
import './VehiclesViews.css'


function VehiclesViews({vehicle}) {
  return (
    <div className='VehiclesViews'>
        <h1>{vehicle.name}</h1>
        <h2>{vehicle.description}</h2>
        <img src={vehicle.image} alt={vehicle.name +"image"} />
    </div>

  )
}

export default VehiclesViews;