import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import '../components/css/tracking.css';
import {Link} from 'react-router-dom';

class PlayVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div className="contents padd">
                <Header pagename={"CSE401 : Computational Physics"}/>
                <div className="content">
                    <div className="contentflex">
                        <div className="mainrow">
                            <video
                                src="https://static.videezy.com/system/resources/previews/000/034/947/original/green-screen-laptop-1.mp4"
                            controls>
                                <source type="video/mp4" src="https://static.videezy.com/system/resources/previews/000/034/947/original/green-screen-laptop-1.mp4"></source>
                            </video>
                        </div>
                        <div className="siderow">
                        <div className="coursection">
                                <div className="coursetitle">
                                    Lecture Notes
                                </div>
                                <div className="courselist">
                                    <p>
                                    Computational physics is the study of scientific problems using computational methods; it combines computer science, physics and applied mathematics to develop scientific solutions to complex problems. 
                                        <br/><br/>
                                        Computational physics complements the areas of theory and experimentation in traditional scientific investigation.  It has been successfully applied to areas such as molecular modeling, electronic circuit design, protein folding, atmospheric science, aerodynamic design and testing, and material science – to name just a few.
                                        <br/><br/>
                                        In a nutshell: Computational physics will allow you to tackle realistic problems in practically every field of science and engineering.
                                    </p>
                                </div>  
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default PlayVideo;