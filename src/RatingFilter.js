import React from 'react'
import Rating from './Rating'

const RatingFilter = ({onChange, count}) => (
    <div className="rating">
        <span className="ratingText">Minimum rating</span>
        <Rating
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }} />
      </div>
)

export default RatingFilter