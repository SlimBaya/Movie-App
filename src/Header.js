import React, { Component } from 'react';
import './App.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:''
          }
    }
    handelchange=(event)=>{
        this.setState({keyword:event.target.value})
        this.props.searchname(event.target.value)
    }
    render() { 
        return (<div className='searchMovie'> 
        <input type='text' placeholder="Type the movie name to search"  onChange={this.handelchange} style={{width:'40%'}}/>
        
        </div>  );
    }
}
 
export default Header;