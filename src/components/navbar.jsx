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
                                <span data-to="home" className="link">Home</span>
                            </button>
                            <button className={this.state.active === 'courses' ? 'active btn-link': 'btn-link'}
                             onClick={this.handleClick} data-to="courses">
                                <i className="fa fa-book"></i>
                                <span data-to="courses" className="link">Courses</span>
                            </button>
                            <button className={this.state.active === 'results' ? 'active btn-link': 'btn-link'}
                             onClick={this.handleClick} data-to="results">
                                <i className="fa fa-receipt"></i>
                                <span data-to="results" className="link">Results</span>
                            </button>
                            <button className={this.state.active === 'timetable' ? 'active btn-link': 'btn-link'}
                             onClick={this.handleClick} data-to="timetable">
                                <i className="fa fa-calendar"></i>
                                <span data-to="timetable" className="link">Timetable</span>
                            </button>
                            <button className={this.state.active === 'downloads' ? 'active btn-link': 'btn-link'}
                             onClick={this.handleClick} data-to="downloads">
                                <i className="fa fa-download"></i>
                                <span data-to="downloads" className="link">Downloads</span>
                            </button>
                            
                 </div>
             </nav>

          );
     }
 }
  
 export default withRouter(NavBar);