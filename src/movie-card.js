import React from 'react';
import Rating  from './Rating'

const Movieitem=({item})=>{

    return(<div className='movieItem' key={item.id}>

                <h2>{item.title}</h2>

                <img className="movieImage"  src={item.image}/> <br/>

                <span> <Rating count={item.rating} /> </span>

    </div>)
}

export default Movieitem;