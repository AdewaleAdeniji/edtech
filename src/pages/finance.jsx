import React, { Component } from 'react';
import User from '../components/icons/user.png';
import {Header} from '../components/uikits';


class Finance extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loggedin:false,
         }
    }
    render() { 
        return ( 
            <div>
                  
                <div className="contents">
                    <Header username="DHL Logistics" picture={User}/>
                    <div className="content">
                        <div className="contentitle">
                            Finance
                            <div className="metrics">
                                <ul>
                                    <li className="active">
                                        All
                                    </li>
                                    <li>
                                        Closed - Deals
                                    </li>
                                    <li>
                                        Declined
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contentcontainer">
                            <div className="metrics">
                                <span className="metricstext">Statistics</span>
                                <select name="metricselection">
                                    <option value="week">This week</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="dashboardstats col-md-12">
                        <div className="col-mds-8 col-mds-12">
                            
                            <div className="statstable">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Order No</th>
                                            <th>Date</th>
                                            <th>Customer Name</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                JSHEDU29DU283
                                            </td>
                                            <td>
                                                June 12, 10:00am
                                            </td>
                                            <td>
                                                Alfred Ibrahim
                                            </td>
                                            <td>
                                                &#8358;3,000
                                            </td>
                                            <td>
                                                <label className="accepted">Accepted</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                JSHEDU29DU283
                                            </td>
                                            <td>
                                                June 12, 10:00am
                                            </td>
                                            <td>
                                                Alfred Ibrahim
                                            </td>
                                            <td>
                                                &#8358;3,000
                                            </td>
                                            <td>
                                                <label className="declined">Declined</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                JSHEDU29DU283
                                            </td>
                                            <td>
                                                June 12, 10:00am
                                            </td>
                                            <td>
                                                Alfred Ibrahim
                                            </td>
                                            <td>
                                                &#8358;3,000
                                            </td>
                                            <td>
                                                <label className="declined">Declined</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                JSHEDU29DU283
                                            </td>
                                            <td>
                                                June 12, 10:00am
                                            </td>
                                            <td>
                                                Alfred Ibrahim
                                            </td>
                                            <td>
                                                &#8358;3,000
                                            </td>
                                            <td>
                                                <label className="declined">Declined</label>
                                            </td>
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Finance;