import React from 'react'

const AddMovie=({newmovie=()=>{}})=>
{   
 return  <img className="add" onClick={()=>newmovie({
    id:prompt("what is the movie title"),
    image:prompt("add an image of this movie: "),
    title:prompt("what is the movie title"),
    count:prompt("your rating of this film: "),
    year:prompt("Release date of this movie: ")
  
  

 })
} src="http://www.limitpointstore.com/products/addmovie/images/addmovieicon.png"/>
}
export default AddMovie;