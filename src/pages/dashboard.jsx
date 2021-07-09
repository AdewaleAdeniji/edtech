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
                                    Results
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
                                    Online Forms
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageTwo} className="card-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="viewcards">
                            <div className="viewcardstext">
                                Dr. Feranmi Adeniji Ph.d
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    Course Advisor
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
                                    Course Registration
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    Completed
                                </span>
                                <div className="viewicons">
                                <img alt="userlogo" src={CardImageTwo} className="card-img"/>
                                </div>
                            </div>
                        </div>
                        <div className="viewcards">
                            <div className="viewcardstext">
                                 Semester 
                            </div>
                            <div className="viewcardsdesc">
                                <span className="viewcardscount">
                                    First Semester
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
            </div>
         );
    }
}
 
export default Dashboard;