import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import '../components/css/tracking.css';


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div className="contents padd">
                <Header pagename={"Result for 2021/2022 Harmattan Semester."}/>
                <div className="content">
                        <div className="contentitle">
                           Name: Adeniji Oluwaferanmi <br/>
                           Matriculation Number: 161678

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
                                    S/N
                                </th>
                                <th>
                                    Course Code
                                </th>
                                <th>
                                    Course Title
                                </th>
                                <th>
                                    Unit
                                </th>
                                <th>
                                    Score
                                </th>
                                <th>
                                    Grade
                                </th>
                                <th>
                                    Points
                                </th>
                                <th>
                                    Remark
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <div className="notracking hidden">
                                There is no tracking yet
                            </div>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    CSE408
                                </td>
                                
                                <td>
                                    Compiler Construction in Assembly
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    72
                                </td>
                                <td>
                                    A
                                </td>
                                <td>
                                    25
                                </td>
                                <td>
                                    PASSED
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    CSE408
                                </td>
                                
                                <td>
                                    Compiler Construction in Assembly
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    72
                                </td>
                                <td>
                                    A
                                </td>
                                <td>
                                    25
                                </td>
                                <td>
                                    PASSED
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    CSE408
                                </td>
                                
                                <td>
                                    Compiler Construction in Assembly
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    72
                                </td>
                                <td>
                                    A
                                </td>
                                <td>
                                    25
                                </td>
                                <td>
                                    PASSED
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Result;