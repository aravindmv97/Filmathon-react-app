import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Animated} from "react-animated-css";
import {Link} from 'react-router-dom';

import './Header.css';

class Header extends Component {
	constructor(){
		super()
		{
			this.state={
				   collapsed: true
			};
		}
	}
	
	toggleNavbar = ()=>
  {
    this.setState({
      collapsed: !(this.state.collapsed)
    });
  }

  render() {
    //background: linear-gradient(to left, #000428 , #004e92);
    const color = {color:'white'};
    return (
      <Navbar color="faded" light>     
        <NavbarBrand href="/" className="a">
          <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
          <div>
          	<img className="logo" src="http://2.bp.blogspot.com/-ZLGO_6GZUbw/Vpa7a8nCH9I/AAAAAAAAAJ8/lB7kH5g-6vE/s1600-r/filmathon%2B3.png"/>
          </div>
          </Animated>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink style={color}><Link to={"/"}>HOME</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={color} ><Link to={"/app"}>NEW MOVIES</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={color} ><Link to={"/app"}>TRENDING</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={color} ><Link to={"/app"}>PREMIUM</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={color} ><Link to={"/app"}>ABOUT</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={color} ><Link to={"/app"}>CONTACT US</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
