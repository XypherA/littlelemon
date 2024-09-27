import React from 'react'
import './AboutUs.css'
import Chef1 from './assets/marioadrian1.jpg'
import Chef2 from './assets/marioadrian2.jpg'

function AboutUs() {
  return (
    <section className='container grid aboutus' id='about'>
      <div className='aboutus-description'>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
      </div>
      <div className='aboutus-img'>
        <img src={Chef1} alt="Chef Mario" />
        <img src={Chef2} alt="Chef Adrian" />
      </div>
    </section>
  )
}

export default AboutUs