import React from 'react'
import './Testimonials.css'
import ReviewCards from './ReviewCards'

const reviewers = [
{
  name:"Sarah",
  ratings:[1,1,1,1,1],
  comment:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.`,
  image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  name:"John",
  ratings:[1,1,1,1,0.5],
  comment:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.`,
  image:"https://images.unsplash.com/photo-1497184718905-1e595fc16462?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  name:"Emily",
  ratings:[1,1,1,1,0],
  comment:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.`,
  image:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
  name:"Micheal",
  ratings:[1,1,1,1,0.5],
  comment:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.`,
  image:"https://images.unsplash.com/photo-1492462543947-040389c4a66c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
]

function Testimonials() {
  return (
    <section className='testimonials'>
      <div className='container grid'>
        <h2>Testimonials</h2>
        {reviewers.map((review,index)=>(
          <ReviewCards key={index} review={review}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonials