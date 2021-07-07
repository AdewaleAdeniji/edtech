import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import Package from '../components/icons/package.svg';
import Weight from '../components/icons/weight.svg';

class Assign extends Component {
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
                            Assign
                            <div className="metrics">
                                <ul>
                                    <li className="active">
                                        Accepted Bids
                                    </li>
                                    <li className="inactive">
                                        Rejected Bids
                                    </li>
                                   
                                </ul>
                                <button className='viewprocessed'>
                                    View Processed Order
                                </button>
                            </div>
                        </div>
                </div>
                <div className="dashboardstats col-md-12 marketcards assigns">
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                               
                            </div>
                            <div className="card-address">
                                <i className="fa fa-arrow-up"></i>
                                113, Cresent road, iparapa
                            </div>
                            <div className="card-address deliver">
                                <i className="fa fa-arrow-down"></i>
                                494, Lorem ipsum
                            </div>
                            <div className="card-packages">
                                <img alt="logistics image"  src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img alt="logistics image"  src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            
                        </div>
                    </div>
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                               
                            </div>
                            <div className="card-address">
                                <i className="fa fa-arrow-up"></i>
                                113, Cresent road, iparapa
                            </div>
                            <div className="card-address deliver">
                                <i className="fa fa-arrow-down"></i>
                                494, Lorem ipsum
                            </div>
                            <div className="card-packages">
                                <img alt="logistics image"  src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img alt="logistics image"  src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            
                        </div>
                    </div>
                    <div className="marketcard ">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                               
                            </div>
                            <div className="card-address">
                                <i className="fa fa-arrow-up"></i>
                                113, Cresent road, iparapa
                            </div>
                            <div className="card-address deliver">
                                <i className="fa fa-arrow-down"></i>
                                494, Lorem ipsum
                            </div>
                            <div className="card-packages">
                                <img alt="logistics image"  src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img alt="logistics image"  src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            
                        </div>
                    </div>
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                               
                            </div>
                            <div className="card-address">
                                <i className="fa fa-arrow-up"></i>
                                113, Cresent road, iparapa
                            </div>
                            <div className="card-address deliver">
                                <i className="fa fa-arrow-down"></i>
                                494, Lorem ipsum
                            </div>
                            <div className="card-packages">
                                <img alt="logistics image"  src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img alt="logistics image"  src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            
                        </div>
                    </div>
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                               
                            </div>
                            <div className="card-address">
                                <i className="fa fa-arrow-up"></i>
                                113, Cresent road, iparapa
                            </div>
                            <div className="card-address deliver">
                                <i className="fa fa-arrow-down"></i>
                                494, Lorem ipsum
                            </div>
                            <div className="card-packages">
                                <img alt="logistics image"  src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img alt="logistics image"  src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            
                        </div>
                    </div>
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                               
                            </div>
                            <div className="card-address">
                                <i className="fa fa-arrow-up"></i>
                                113, Cresent road, iparapa
                            </div>
                            <div className="card-address deliver">
                                <i className="fa fa-arrow-down"></i>
                                494, Lorem ipsum
                            </div>
                            <div className="card-packages">
                                <img alt="logistics image"  src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img alt="logistics image"  src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            
                        </div>
                    </div>               
                </div>
            </div>
         );
    }
}
 
export default Assign;