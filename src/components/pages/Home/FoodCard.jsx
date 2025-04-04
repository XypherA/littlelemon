import React from 'react'
import './FoodCard.css'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'


function Foodcard({food}) {
  return (
    <article className='foodcard'>
        <div className='foodcard-image'>
            <img src={food.image} alt={food.name} />
        </div>
        <div className='foodcard-header'>
            <h3>{food.name}</h3>
            <span>{food.price}</span>
        </div>
        <div className='foodcard-body-footer'>
            <p>{food.info}</p>
            <HashLink to='/orderOnline'>Order for delivery <FontAwesomeIcon icon={faCarSide} /></HashLink>
        </div>
    </article>
  )
}

export default Foodcard