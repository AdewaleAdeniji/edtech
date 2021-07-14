import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import '../components/css/tracking.css';


class Results extends Component {
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
                <Header pagename={"Results"}/>
                <div className="content">
                        <div className="contentitle">
                           Results
                        </div>
                        <div className="filtercontainer">
                            <div className="filters">
                                <div className="searchbox">
                                    <i className="fa fa-search"></i>
                                    <input type="search" placeholder="Search Course Name"/>
                                 </div>
                                 <div className="selectdriver">
                                     <label htmlFor="driver">
                                         Session
                                     </label>
                                     <select name="metricselection">
                                        <option value="">2021/2021</option>
                                        <option value="">2021/2021</option>
                                        <option value="">2021/2021</option>
                                    </select>
                                 </div>
                                 <div className="selectdriver">
                                 <label htmlFor="date">
                                        Semester
                                     </label>
                                     <select name="metricselection">
                                        <option value="">Harmattan Semester</option>
                                        <option value="">Rain Semester</option>
                                    </select>
                                 </div>
                                 
                               
                            </div>
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
                                    Unit
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <div className="notracking hidden">
                                There is no tracking yet
                            </div>
                            
                            <tr className="clickable" onClick={this.handleResult}>
                            
                                <td>
                                    CSE408
                                </td>
                                
                                <td>
                                    Compiler Construction in Assembly
                                </td>
                                <td>
                                    5
                                </td>
                                
                            </tr>
                             
                        
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Results;