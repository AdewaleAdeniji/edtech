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
                            <button className={this.state.active === 'home' ? 'active btn-link': 'btn-link'}
                             onClick={this.handleClick} data-to="home">
                                <i className="fa fa-home"></i>
                                <span data-to="dashboard" className="link">Home</span>
                </button>
                            
                 </div>
             </nav>

          );
     }
 }
  
 export default withRouter(NavBar);