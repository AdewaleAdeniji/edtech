import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Market from './icons/5.svg';
import Assign from './icons/2.svg';
import Tracking from './icons/3.svg';

 class NavBar extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             active:'dashboard',
             showNav:false
          }
          this.handleClick = this.handleClick.bind(this);
     }
     componentDidMount(){
        if((window.location.href).indexOf('login')===-1){
            this.setState({showNav:true});
        }
     }
     async handleClick(event){
        
        var redirectlink = event.target.attributes.getNamedItem('data-to').value;
        await this.setState({active:redirectlink});
        redirectlink = "/"+redirectlink;
        this.props.history.push(redirectlink);
        
        
     }  
     render() { 
         return ( 
             <nav className={this.state.showNav ? '' : 'hidden'}>
                 <h1 className="navlogo">
                    Logo
                 </h1>
                 <div className="links">
                            <button className={this.state.active === 'dashboard' ? 'active btn-link': 'btn-link'}
                             onClick={this.handleClick} data-to="dashboard">
                                <i className="fa fa-qrcode"></i>
                                <span data-to="dashboard" className="link">Dashboard</span>
                            </button>
                            <button className={this.state.active === 'market' ? 'active btn-link': 'btn-link'} onClick={this.handleClick} data-to="market">
                                <img alt="navlogo" src={Market} className="market"/>
                                <span data-to="market" className="link">Market Place</span>
                            </button>
                            <button className={this.state.active === 'assign' ? 'active btn-link': 'btn-link'} onClick={this.handleClick} data-to="assign">
                                <img alt="navlogo" src={Assign} className="market"/>
                                <span data-to="assign" className='link'>Assign</span>
                            </button>
                            <button className={this.state.active === 'tracking' ? 'active btn-link': 'btn-link'}  onClick={this.handleClick} data-to="tracking">
                                <img alt="navlogo" src={Tracking} className="market"/>
                                <span data-to="tracking" className='link'>Tracking</span>
                            </button>

                            <button className={this.state.active === 'drivers' ? 'active btn-link': 'btn-link'} onClick={this.handleClick} data-to="drivers">
                                <i className="fa fa-user"></i>
                                <span data-to="drivers" className='link'>Drivers</span>
                            </button>
                 </div>
             </nav>

          );
     }
 }
  
 export default withRouter(NavBar);