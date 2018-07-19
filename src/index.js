import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './index.css';

import Header from './Header';
import Home from './Home';
import Details from './Details';
import App from './App';


ReactDOM.render(
  <Router>
	  <div className="container-fluid color card">
		  <Header />
	    <Route exact path={"/"} component={Home}/>
	    <Route path={"/app"} component={App}/>
	    <Route path={"/details"} component={Details}/>
		</div>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
