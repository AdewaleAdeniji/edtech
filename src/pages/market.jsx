import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import '../components/css/details.css';
import Package from '../components/icons/package.svg';
import Weight from '../components/icons/weight.svg';
import PackageImage from '../components/icons/packageimage.png';

class MarketPlace extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showDetails:false
         }
    }
    render() { 
        return ( 
            <>
            <div className="contents">
                <Header username="DHL Logistics" picture={User}/>
                <div className="content">
                        <div className="contentitle">
                            Market Place
                        </div>
                </div>
                <div className="dashboardstats col-md-12 marketcards">
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                                <label>
                                    NEW
                                </label>
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
                                <img src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            <div className="card-action">
                                <button className="bidbutton">
                                    BID
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                                <label>
                                    NEW
                                </label>
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
                                <img src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            <div className="card-action">
                                <button className="bidbutton">
                                    BID
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                                <label>
                                    NEW
                                </label>
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
                                <img src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            <div className="card-action">
                                <button className="bidbutton">
                                    BID
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                                <label>
                                    NEW
                                </label>
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
                                <img src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            <div className="card-action">
                                <button className="bidbutton">
                                    BID
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                                <label>
                                    NEW
                                </label>
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
                                <img src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            <div className="card-action">
                                <button className="bidbutton">
                                    BID
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="marketcard">
                        <div className="card-body">
                            <div className="card-head">
                                <span className="cardid">
                                    ID: 93019283
                                </span>
                                <label>
                                    NEW
                                </label>
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
                                <img src={Package} className="card-img"/>
                                 2 packages
                            </div>
                            <div className="card-weight">
                                <img src={Weight} className="card-img"/>
                                2 KG
                            </div>
                            <div className="card-action">
                                <button className="bidbutton">
                                    BID
                                </button>
                            </div>
                        </div>
                    </div>               
                </div>
            </div>
            <div  className={this.state.showDetails ? 'detailsmodal' : 'hidden'}>
                <div className="detailscontents">
                    <div className="title">
                        Good Title
                    </div>
                    <div className="detailsection">
                        <div className="detail">
                            <div className="detailname">
                                ORDER ID 
                            </div>
                            <div className="detailvalue">
                                JSHEDU29DU283   
                            </div>
                        </div>
                        <div className="detail">
                            <div className="detailname">
                                Shipped From
                            </div>
                            <div className="detailvalue">
                                <span className="shipname">
                                    John Doe    
                                </span>
                                <span className="shiplocation">
                                    113 Crescent Road, Kinnira, Ibadan.
                                </span>   
                            </div>
                        </div>
                        <div className="detail">
                            <div className="detailname">
                                Shipped to
                            </div>
                            <div className="detailvalue">
                            <span className="shipname">
                                    John Doe    
                                </span>
                                <span className="shiplocation">
                                    113 Crescent Road, Kinnira, Ibadan.
                                </span>
                            </div>
                        </div>
                        <div className="detail">
                            <div className="detailname">
                                Weight
                            </div>
                            <div className="detailvalue">
                                2KG
                            </div>
                        </div>
                        <div className="detail">
                            <div className="detailname">
                                No of Package
                            </div>
                            <div className="detailvalue">
                                2 
                            </div>
                        </div>
                    </div>

                    <div className="detailsimages">
                        <h1>
                            Package Images
                        </h1>
                        <div className="imagesection">
                            <img src={PackageImage}/>
                            <img src={PackageImage}/>
                            <img src={PackageImage}/>
                        </div>
                    </div>
                    <div className="pricelisting">
                        <h1>
                            Price Listing
                        </h1>
                        <div className="pricelists">
                            <div className="pricelist">
                                <span className="pricename">Road </span>
                                <i className="fa fa-angle-down"></i>
                            </div>
                        </div>
                        <div className="forminput">
                            <label>
                                Means
                            </label>
                            <input type="text" placeholder="Means"/>
                        </div>
                        <div className="forminputs">
                            <div className="forminput">
                                <label>
                                    Amount
                                </label>
                                <input type='text' placeholder="Amount"/>
                            </div>
                            <div className="forminput duration">
                                <label>
                                    Duration
                                </label>
                                <input type="text" placeholder="Duration"/>
                            </div>
                        </div>
                        <button className="addaccess btn">
                            <i className='fa fa-plus'></i> Add Price</button>
                        <div className="detailsfooter">
                            <button className="btn btn-submit-bid">
                                Submit Bid
                            </button>
                        </div>
                    </div>


                </div>
            </div>
            </>
         );
    }
}
 
export default MarketPlace;