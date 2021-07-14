import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import '../components/css/tracking.css';


class Timetable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div className="contents padd">
                <Header pagename={"Department of Mathematics | SQI College OF ICT  | 300 LEVEL | 2nd Semester "}/>
                <div className="content">
                        <div className="contentitle">
                        Timetable 
                        </div>
                        <div className="filtercontainer">
                            <div className="filters">
                                <div className="searchbox">
                                    <i className="fa fa-search"></i>
                                    <input type="search" placeholder="Search Course Name"/>
                                 </div>
                                 <div className="selectdriver">
                                     <label htmlFor="driver">
                                     2021/2021 Session
                                     </label>
                                 </div>
                                 <div className="selectdriver">
                                 <label htmlFor="date">
                                 Harmattan Semester
                                     </label>
                                     
                                 </div>
                                 
                               
                            </div>
                        </div>
                </div>
                <div className="dashboardstats col-md-12 marketcards tracking">
                <table>
                        <thead>
                            <tr>
                                <th>
                                    <i className="fa fa-stopwatch"></i>
                                </th>
                                <th>
                                    Monday
                                </th>
                                <th>
                                    Tuesday
                                </th>
                                <th>
                                    Wednesday
                                </th>
                                <th>
                                    Thursday
                                </th>
                                <th>
                                    Friday
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <div className="notracking hidden">
                                There is no tracking yet
                            </div>
                            <tr>
                                <td>
                                    8:00 - 9:00
                                </td>
                                <td>
                                    PHY 201
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    CHE201
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    CSE201
                                </td>
                            
                            </tr>
                            <tr>
                                <td>
                                    9:00 - 10:00
                                </td>
                                <td>
                                    PHY 201
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                </td>
                                <td>
                                    CHE201
                                    
                                </td>
                                <td>
                                    CSE201
                                </td>
                            </tr>
                            <tr>    
                                <td>
                                    10:00 - 11:00
                                </td>
                                <td>
                                    PHY 201
                                </td>
                                <td>
                                    CSE301
                                </td>
                                <td>
                                    CHE201
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    CSE201
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    11:00 - 12:00
                                </td>
                                <td>
                                    PHY 201
                                </td>
                                <td>
                                    CHE301
                                </td>
                                <td>
                                    CHE201
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    CSE201
                                </td>
                            </tr>
                            <tr>
                                <td>14:00 - 15:00</td>
                                <td>
                                    PHY 201
                                </td>
                                <td>   
                                    CEP201
                                </td>
                                <td>
                                    CHE201
                                </td>
                                <td>
                                    PSG201
                                </td>
                                <td>
                                    CSE201
                                </td>
                            </tr>
                            <tr>
                                <td>

                                16:00 - 17:00
                                </td>
                                <td>
                                    PHY 201
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    CHE201
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    CSE201
                                </td>
                            </tr>
                            <tr>
                                <td>17:00 - 18:00</td>
                                <td>
                                    PHY 201
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    CHE201
                                </td>
                                <td>
                                    
                                </td>
                                <td>
                                    CSE201
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>
            </div>
         );
    }
}
 
export default Timetable;