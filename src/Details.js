import React, { Component } from 'react';
import { Card, CardImg, CardBody, Container, Row, Col } from 'reactstrap';
import {Animated} from "react-animated-css";
import StarRatingComponent from 'react-star-rating-component';
import { BrowserHistory } from 'react-router-dom' 

import './Details.css';

class Details extends Component {
	constructor(props) {
	  super(props);
	  
	}

  render() {

    return (
    	<div>	
        <Card>
          <CardImg  className="cover_style" src={`https://image.tmdb.org/t/p/w500/${this.props.location.state.obj.backdrop_path}`}/>
          <CardBody>
            <Container>
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
              <Row>
                <Col xs="3">
                  <div className="img">
                    <CardImg className="icon_style" alt="img" src={`https://image.tmdb.org/t/p/w500/${this.props.location.state.obj.poster_path}`} />
                  </div>
                </Col>
                <Col xs="9">
                  <h1 style={{marginTop:'30px'}}><b>{this.props.location.state.obj.title}</b></h1>
                  <p><b>Release date :</b> {this.props.location.state.obj.release_date}</p>
                </Col>
              </Row>
              </Animated>
            </Container>
            <Container>
              <Row>
                <Col sm={{offest:1}}>
                  <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                  <div>
                    <center>
                      <h1>{this.props.location.state.obj.vote_average}/10</h1>
                      <h1>
                      <StarRatingComponent 
                            name="rate2" 
                            editing={false}
                            renderStarIcon={() => <span>*</span>}
                            starCount={10}
                            value={this.props.location.state.obj.vote_average}/>
                      </h1>
                    </center>
                  </div> 
                  </Animated>
                </Col>
                <Col>
                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                  <center>
                    <h2>Rating</h2>
                    <p><b>{this.props.location.state.obj.vote_count}</b> people have voted for this movie.</p>
                  </center>
                  </Animated>
                </Col>
              </Row>   
            </Container>
            <Container>
              <Row>
                <Col>
                  <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                  <h3><b>Overview</b></h3>
                  </Animated>
                  <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                    {this.props.location.state.obj.overview}
                  </Animated>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Details;
