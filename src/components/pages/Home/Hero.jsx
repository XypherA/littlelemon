import React from 'react'
import { HashLink } from 'react-router-hash-link'
import HeroPic from './assets/heropic.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className='hero'>
        <div className='container grid'>
            <div className='hero-info'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean 
                    restaurant, focused on
                    traditional recipes served with a modern twist.
                </p>
                <HashLink className='button-primary' to="/resercations">Reserve a Table</HashLink>
            </div>
            <img src={HeroPic} className='hero-img' alt='Cuisine'/>
        </div>
    </section>
  )
}

export default Hero