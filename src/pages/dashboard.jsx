import React, { Component } from 'react';
import User from '../components/icons/user.png';
import {Header} from '../components/uikits';
import ImageDesc from '../components/icons/imagedesc.svg';
import CardImageOne from '../components/icons/cash.svg';
import CardImageTwo from '../components/icons/bids.svg';
import CardImageThree from '../components/icons/delivery.svg';
import CardImageFour from '../components/icons/drivers.svg';

class Dashboard extends Component {
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
                            Overview
                        </div>
                        <div className="contentcontainer">
                            <div className="metrics">
                                <span className="metricstext">Statistics</span>
                                <select name="metricselection">
                                    <option value="week">This week</option>
                                </select>
                            </div>
                            <div className="imagedesc">
                                <img alt="userlogo" src={ImageDesc} className="imgdesc"/>
                                <div className="imagedesctext">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="overviewcards">
                        <div className="viewcards">
                            <div className="viewcardstext">
                                Total Transactions
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    25
                                </span>
                                <div className="viewicons">
                                    <img alt="userlogo" src={CardImageOne} className="card-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="viewcards">
                            <div className="viewcardstext">
                                Total Transactions
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    25
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageTwo} className="card-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="viewcards">
                            <div className="viewcardstext">
                                Total Transactions
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    25
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageThree} className="card-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="viewcards">
                            <div className="viewcardstext">
                                Total Transactions
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    25
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageFour} className="card-img"/>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="dashboardstats col-md-12">
                        <div className="col-mds-8">
                            <div className="statsdesc">
                                <span className="recentbidstext">
                                    Recent
                                </span>
                                <span className="seealltext">
                                    See all 
                                </span>
                            </div>
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
                        <div className="col-mds-4">
                            <div className="ongoingorders">
                                 <div className="statsdesc">
                                    <span className="recentbidstext">
                                        Ongoing Order
                                    </span>
                                    
                                </div>
                                <div className="orderslist">
                                    <div className="orders">
                                        <div className="box"></div>
                                        <div className="orderdesc">
                                            <div className="address">
                                                113, Cresent road, iparapa
                                            </div>
                                            <div className="packages">
                                                2 packages
                                            </div>
                                        </div>
                                        <div className="orderprice">
                                            &#8358; 3000
                                        </div>
                                    </div>

                                    <div className="orders">
                                        <div className="box"></div>
                                        <div className="orderdesc">
                                            <div className="address">
                                                113, Cresent road, iparapa
                                            </div>
                                            <div className="packages">
                                                2 packages
                                            </div>
                                        </div>
                                        <div className="orderprice">
                                            &#8358; 3000
                                        </div>
                                    </div>
                                    <div className="orders">
                                        <div className="box"></div>
                                        <div className="orderdesc">
                                            <div className="address">
                                                113, Cresent road, iparapa
                                            </div>
                                            <div className="packages">
                                                2 packages
                                            </div>
                                        </div>
                                        <div className="orderprice">
                                            &#8358; 3000
                                        </div>
                                    </div>
                                    <div className="orders">
                                        <div className="box"></div>
                                        <div className="orderdesc">
                                            <div className="address">
                                                113, Cresent road, iparapa
                                            </div>
                                            <div className="packages">
                                                2 packages
                                            </div>
                                        </div>
                                        <div className="orderprice">
                                            &#8358; 3000
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Dashboard;