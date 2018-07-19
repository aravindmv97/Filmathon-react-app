import React, { Component } from 'react';

import Search from './Search';
import MovieList from './MovieList';

import './Home.css';

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          lists: [],
          url:''
      }
  }

  afterDataReceived = (list,url) =>
  {
      this.setState({lists:list,url:url});
  }


  render() {
      return (
        <div>
          <Search getData={this.afterDataReceived}/>
          <MovieList passData={this.state.lists}/>
        </div>
      );
  }
}

export default Home;