import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        results: [],
        done: false
    };
  }

  inputSearch = (e) => {
    console.log("query entry...");
    this.setState({ name: e.target.value });
    if (this.state.name.length >= 1) {
        this.getData();
    }
  }

  getData = (e) => {
    const url="https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&query="+this.state.name;
     fetch(url)
      .then(res => res.json())
      .then((result) => {
          this.setState({
              results: result.results,
          });
          this.props.getData(this.state.results);
          },
          (error) => {
              console.log(error);
          }
      )
  }


  render() {
   
      return (
        <div>
		     	<div className="jumbotron">
		        <center>
            <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
		          <div className="title">
		            <h4><i><b>FILMATHON</b></i></h4>
		            <p>
		            	<h6><b>Find movies you like and start your filmathon....</b></h6>
		            </p>
		          </div>
		          <input placeholder="Search movies..." className="search" onChange={this.inputSearch} type="text"/>
            </Animated>
		        </center>
					</div>          
		    </div>
      );
  	}
	}

export default Search;