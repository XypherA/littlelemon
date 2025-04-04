import React from 'react'
import './ReviewCards.css'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";




function ReviewCards({review}) {
  return (
    <article className='review-card'>
        <img src={review.image} alt={review.name} />
        <h4>{review.name}</h4>
        <span>
        {review.ratings.map((ratingPoint, idx) =>
          ratingPoint === 1 ? (
            <FaStar key={idx} />
          ) : ratingPoint === 0.5 ? (
            <FaStarHalfAlt key={idx} />
          ) : ratingPoint === 0 ? (
            <FaRegStar key={idx} />
          ) : null
        )}
        <p>
            {review.ratings.reduce((accumulator, currentValue) => (
                accumulator + currentValue),0)} /5
        </p>
        </span>
        
        <blockquote>
            <p>"{review.comment}"</p>
        </blockquote>
    </article>
  )
}

export default ReviewCards