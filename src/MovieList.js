import React, { Component } from 'react';
import { Collapse, CardHeader, CardBody, Card, CardDeck } from 'reactstrap';
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';

import './MovieList.css';


let arr:number[] = new Array(100).fill(false);

class MovieList extends Component {
	constructor(props) {
	  super(props);

	}

	toggle = (e) => {
		if(arr[e.target.id]==false)
		{
			arr.fill(false);
			arr[e.target.id]=true;
		}
		else
		{
			arr.fill(false);
		}
    this.forceUpdate();
  }
 	
  componentWillReceiveProps(nextProps){
  	if(this.props.passData!==nextProps.passData)
  	{
  		arr.fill(false);
  	}
  }

  render() {

  	const card_color = {
  		backgroundColor:'#EC1B34',
  		borderRadius:'40px'
  	};

  	const header_style = {
  		backgroundColor:'#EC1B34',
  		borderRadius:'40px',
  		padding:'15px'
  	};
  
  	return(
  		<div>
	  		<CardDeck>
	  		{
  				this.props.passData.map((list,index)=>
	        <div key={list.id}>
		        <center>	
			     		<Card className="cards box" style={card_color}>
			          <CardHeader id={index} key={list.index} onClick={this.toggle} >{list.title}
			          </CardHeader>
			        </Card>  
		          <Collapse isOpen={arr[index]}>
		            <Card className="box">
						      <CardBody>
		              	<div className="movie_details">
			                <p>
			                	<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
			                  <div className="img">
			                    <img className="img" alt="img" src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`} />
			                  </div>
			                  </Animated>
			                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
			                  <ul className="content">
			                    <li><b>Title : </b>{list.title}</li>
			                    <li><b>Overview : </b>{list.overview}</li>
			                    <li><b>Vote Average : </b>{list.vote_average} /10 from <b>{list.vote_count}</b> users </li>
			                    <li><b>Release date : </b>{list.release_date} </li>
			                  </ul>
			                  </Animated>   
		                  </p>
		                </div>
						      </CardBody>						      
						     	<Link 
						     		to={{
						     			pathname:'/details',
						     			state:{obj:list}
						     		}} 
						     		className="more" >More...
						     	</Link>    
						    </Card>
							</Collapse>
		        </center>   
		        <p></p>
	      	</div>
	    		)
	  		}
	  		</CardDeck>
  		</div>
  		);
  	}
	}

export default MovieList;
