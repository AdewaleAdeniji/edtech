import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import '../components/css/tracking.css';


class Tracking extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div className="contents">
                <Header username="DHL Logistics" picture={User}/>
                <div className="content">
                        <div className="contentitle">
                            Tracking
                            <div className="metrics">
                                <ul>
                                    <li className="active">
                                       All
                                    </li>
                                    <li className="inactive">
                                        In process
                                    </li>
                                   <li>
                                       Delivered
                                   </li>
                                </ul>
                            </div>
                        </div>
                        <div className="filtercontainer">
                            <div className="filters">
                                <div className="searchbox">
                                    <i className="fa fa-search"></i>
                                    <input type="search" placeholder="Enter Order ID"/>
                                 </div>
                                 <div className="selectdriver">
                                     <label htmlFor="driver">
                                         Driver:
                                     </label>
                                     <select name="metricselection">
                                        <option value="week">John Doe</option>
                                    </select>
                                 </div>
                                 <div className="selectdriver">
                                 <label htmlFor="date">
                                        Date:
                                     </label>
                                     <select name="metricselection">
                                        <option value="week">Today</option>
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
                                    ORDER ID
                                </th>
                                <th>
                                    DRIVER
                                </th>
                                <th>
                                    PICK UP
                                </th>
                                <th>
                                    DROP
                                </th>
                                <th>
                                    STATUS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <div className="notracking hidden">
                                There is no tracking yet
                            </div>
                            <tr>
                                <td>
                                    DHL/90/H/2923HD
                                </td>
                                <td>
                                    John Doe
                                </td>
                                <td>
                                    113, Cresent road, iparapa, Lagos Nigeria
                                </td>
                                <td>
                                    113, Cresent road, iparapa, Lagos Nigeria
                                </td>
                                <td>
                                    <label className="label in-progress">
                                        In Progress
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    DHL/90/H/2923HD
                                </td>
                                <td>
                                    John Doe
                                </td>
                                <td>
                                    113, Cresent road, iparapa, Lagos Nigeria
                                </td>
                                <td>
                                    113, Cresent road, iparapa, Lagos Nigeria
                                </td>
                                <td>
                                    <label className="label completed">
                                        Completed
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    DHL/90/H/2923HD
                                </td>
                                <td>
                                    John Doe
                                </td>
                                <td>
                                    113, Cresent road, iparapa, Lagos Nigeria
                                </td>
                                <td>
                                    113, Cresent road, iparapa, Lagos Nigeria
                                </td>
                                <td>
                                    <label className="label canceled">
                                        Canceled
                                    </label>
                                </td>
                            </tr>
                            
                        
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Tracking;