import React from 'react'
import './Special.css'
import BruschettaImg from './assets/bruschetta.jpg'
import GreeksaladImg from './assets/greeksalad.jpg'
import LemondessertImg from './assets/lemondessert.jpeg'
import { HashLink } from 'react-router-hash-link'
import Foodcard from './Foodcard'


const foods = [
  {
    name: 'Greek Salad',
    image: GreeksaladImg,
    price: '$10.00',
    info: `The famous greek salad of crispy lettuce, peppers,
           olives and our Chicago style feta cheese,
           garnished with crunchy garlic and rosemary croutons.`,
  },
  {
    name: 'Bruschetta',
    image: BruschettaImg,
    price: '$6.79',
    info: `Our Bruschetta is made from grilled bread that has been
           smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: LemondessertImg,
    price: "$8.50",
    info: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  }
];

function Specials() {
  return (
    <section className='container grid specials' id='menu'>
      <div className='specials-header'>
        <h2>Today Specials!</h2>
        <HashLink className='button-primary' to="/#menu">Order Now</HashLink>
      </div>
      {foods.map((food, index) => (
        <Foodcard key={index} food= {food}/>
      ))}
    </section>
  )
}

export default Specials