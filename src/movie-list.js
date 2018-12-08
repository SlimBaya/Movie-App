import React from 'react';
import  Movieitem from './movie-card'
import './App.css'

const Movielist= ({movies = []}) => 
    {
        return (
            <div className="movieList">
                {movies.map((el,i)=>{ return <Movieitem  item ={el}  key={el.id} />})}
            </div>       
        )
}
export default  Movielist;