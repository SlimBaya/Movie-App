import React, { Component } from 'react';
import Movielist from './movie-list'
import Header from './Header'
import RatingFilter from './RatingFilter'
import './App.css';


const moviesTab=[{
  id:'1',
  title: "CASABLANCA",
  image: 'http://anglicanaorlu.org/wp-content/uploads/2018/08/casablanca-movie-poster-poster-sat-s-all-posters-avec-pster0043-film-casablanca-6-1000x1000-et-casablanca-movie-poster-original-4-1000x1000px-casablanca-movie-poster-original.jpg',
  rating: 5
  },
  
  {
  id:'2',
  title: "SKIPTRACE",
  image:'https://www.directvdeals.com/resources/wp-content/uploads/2016/07/SKIPTRACE-Teaser-Poster-compressor.jpg',
  rating: 4
  },
  {
  id:'3',
  title: "THE EXORCIST",
  image:'https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/sinema-cinema-film-postersleri/yabanci-filmler/PSTER0028-film-the-exorcist-2-1000x1000.jpg',
  rating: 3
  
  },
  {
  id:'4',
  title: "PATIENTS",
  image:'http://vrairapfrancais.fr/wp-content/uploads/2017/01/patients-1000x1000.png',
  rating: 2
  
  },
  {
    id:'5',
    title: "PARKER",
    image:'https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/sinema-cinema-film-postersleri/yabanci-filmler/pfilm469-parker_37519215-movie-film-poster-1000x1000.jpg',
    rating: 5
    
  },
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        movies:moviesTab,
        filtred:moviesTab,
        minRatingFilter: 1
      }
}
search(keyword){
  let movie =this.state.movies.filter((el,i)=>{return el.title.toLowerCase().indexOf(keyword)>-1})
  this.setState({filtred:movie})
}
searchStars() {
  return this.state.filtred.filter(el => el.rating >= this.state.minRatingFilter)
}
addNewMovie(newMovie) {
  this.setState({
    movies: this.state.movies.concat(newMovie)
  })
}

  render() {
    return (
      <div className="movieApp">
        <Header searchname={movie=>this.search(movie)}/> <br/>
        <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        <Movielist movies={this.searchStars()} onAddMovie={(newMovie) => this.addNewMovie(newMovie)}/>
      </div>
    );
}
}

export default App;
