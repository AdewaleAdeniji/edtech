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
                    <Header username="feranmi Adeniji" picture={User}/>
                    <div className="contentflex">
                    <div className="mainrow">
                   
                    <div className="overviewcards">
                        <div className="viewcards">
                            <div className="viewcardstext">
                                
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    Online Campus
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageTwo} className="card-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="viewcards">
                            <div className="viewcardstext">
                                
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    Online Campus
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageTwo} className="card-img"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="viewcards">
                            <div className="viewcardstext">
                                
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    Results
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageTwo} className="card-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overviewcards">
                        <div className="viewcards">
                            <div className="viewcardstext">
                                CGPA
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    3.87
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageTwo} className="card-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="viewcards">
                            <div className="viewcardstext">
                                Payment Status
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    Paid
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageTwo} className="card-img"/>
                                </div>
                            </div>
                        </div>  
                        <div className="viewcards">
                            <div className="viewcardstext">
                                
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    Online Campus
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageTwo} className="card-img"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="forumsection">
                        <div className="forum-name">
                            Student's Forum
                        </div>
                        <div className="forum">
                            <div className="messagerow col-md-12 flex inline-flex">
                                <div className="col-md-6">
                                    <div className="forum-message">
                                        <div className="forumname">Devferanmi</div>
                                        <div className="forumessage">Question for assignment if 1 + 1</div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                            <div className="messagerow col-md-12 flex inline-flex">
                                <div className="col-md-6">
                                    <div className="forum-message">
                                        <div className="forumname">Devferanmi</div>
                                        <div className="forumessage">Question for assignment if 1 + 1</div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                            <div className="messagerow col-md-12 flex inline-flex">
                                <div className="col-md-6">
                                    <div className="forum-message">
                                        <div className="forumname">Devferanmi</div>
                                        <div className="forumessage">Question for assignment if 1 + 1</div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                            <div className="messagerow col-md-12 flex inline-flex">
                                <div className="col-md-6">
                                    <div className="forum-message">
                                        <div className="forumname">Devferanmi</div>
                                        <div className="forumessage">Question for assignment if 1 + 1</div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                            <div className="messagerow col-md-12 flex inline-flex">
                                <div className="col-md-6">
                                    <div className="forum-message">
                                        <div className="forumname">Devferanmi</div>
                                        <div className="forumessage">Question for assignment if 1 + 1</div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                            <div className="messagerow col-md-12 flex inline-flex">
                                <div className="col-md-6"></div>
                                <div className="col-md-6 mymessage">
                                    <div className="forum-message">
                                        <div className="forumname">Devferanmi</div>
                                        <div className="forumessage">Question for assignment if 1 + 1</div>
                                    </div>
                                </div>
                            </div>
                       
                        </div>
                        <div className="forumaction">
                            <input type="text" placeholder="Type your message here"/>
                            
                        </div>
                    </div>
                    </div>
                    <div className="siderow">
                    <div class="containerc">
                        <div class="calendar">
                            <div class="front">
                            <div class="current-date">
                                <h1>Friday 15th</h1>
                                <h1>January 2016</h1>	
                            </div>

                            <div class="current-month">
                                <ul class="week-days">
                                <li>MON</li>
                                <li>TUE</li>
                                <li>WED</li>
                                <li>THU</li>
                                <li>FRI</li>
                                <li>SAT</li>
                                <li>SUN</li>
                                </ul>

                                <div class="weeks">
                                <div class="first">
                                    <span class="last-month">28</span>
                                    <span class="last-month">29</span>
                                    <span class="last-month">30</span>
                                    <span class="last-month">31</span>
                                    <span>01</span>
                                    <span>02</span>
                                    <span>03</span>
                                </div>

                                <div class="second">
                                    <span>04</span>
                                    <span>05</span>
                                    <span class="event">06</span>
                                    <span>07</span>
                                    <span>08</span>
                                    <span>09</span>
                                    <span>10</span>
                                </div>

                                <div class="third">
                                    <span>11</span>
                                    <span>12</span>
                                    <span>13</span>
                                    <span>14</span>
                                    <span class="active">15</span>
                                    <span>16</span>
                                    <span>17</span>
                                </div>

                                <div class="fourth">
                                    <span>18</span>
                                    <span>19</span>
                                    <span>20</span>
                                    <span>21</span>
                                    <span>22</span>
                                    <span>23</span>
                                    <span>24</span>
                                </div>

                                <div class="fifth">
                                    <span>25</span>
                                    <span>26</span>
                                    <span>27</span>
                                    <span>28</span>
                                    <span>29</span>
                                    <span>30</span>
                                    <span>31</span>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="back">
                            <input placeholder="What's the event?"/>
                            <div class="info">
                                <div class="date">
                                <p class="info-date">
                                Date: <span>Jan 15th, 2016</span>
                                </p>
                                <p class="info-time">
                                    Time: <span>6:35 PM</span>
                                </p>
                                </div>
                                <div class="address">
                                <p>
                                    Address: <span>129 W 81st St, New York, NY</span>
                                </p>
                                </div>
                                <div class="observations">
                                <p>
                                    Observations: <span>Be there 15 minutes earlier</span>
                                </p>
                                </div>
                            </div>

                            <div class="actions">
                                <button class="save">
                                Save <i class="ion-checkmark"></i>
                                </button>
                                <button class="dismiss">
                                Dismiss <i class="ion-android-close"></i>
                                </button>
                            </div>
                            </div>

                        </div>
                        </div>
                    <div className="card">
                        <div className="card-title">
                            Tasks
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>
                                    Submit CSE401 Test
                                </li>
                                <li>
                                    Submit CSE401 Test
                                </li>
                                <li>
                                    Submit CSE401 Test
                                </li>
                                <li>
                                    Submit CSE401 Test
                                </li>
                            </ul>
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