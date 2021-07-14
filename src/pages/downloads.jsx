import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import '../components/css/tracking.css';
import {Link} from 'react-router-dom';

class Downloads extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleResult(){
        window.location.href="/result/234"
    }
    render() { 
        return ( 
            
            <div className="contents padd">
                <Header pagename={"Downloads"}/>
                <div className="content">
                        <div className="contentitle">
                           Downloads
                        </div>
                </div>
                <div className="dashboardstats col-md-12 marketcards tracking">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Course Code
                                </th>
                                <th>
                                    Course Title
                                </th>
                                <th>
                                    Course Lecturer
                                </th>
                                <th>
                                    Download Date
                                </th>
                                <th>
                                    Action
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <div className="notracking hidden">
                                There is no tracking yet
                            </div>
                            
                            <tr className="clickable">
                            
                                <td>
                                    CSE408
                                </td>
                                
                                <td>
                                    Compiler Construction in Assembly
                                </td>
                                <td>
                                    Dr Feranmi Adeniji 
                                </td>
                                <td>
                                    23rd June 2021
                                </td>
                                <td>
                                    <Link to="/course/play">
                                        <i className="fa fa-play"></i>
                                    </Link>
                                    
                                    <i className="fa fa-trash"></i>
                                </td>
                            </tr>
                            <tr className="clickable">
                            
                            <td>
                                CSE408
                            </td>
                            
                            <td>
                                Compiler Construction in Assembly
                            </td>
                            <td>
                                Dr Feranmi Adeniji 
                            </td>
                            <td>
                                23rd June 2021
                            </td>
                            <td>
                                <Link to="/course/play">
                                    <i className="fa fa-play"></i>
                                </Link>
                                
                                <i className="fa fa-trash"></i>
                            </td>
                        </tr>
                         
                        
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Downloads;