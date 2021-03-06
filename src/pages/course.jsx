import React, { Component } from 'react';
import User from '../components/icons/user.png';
import {Header,Button} from '../components/uikits';
import Feranmi from '../components/icons/feranmi.jpg';
import ImageDesc from '../components/icons/imagedesc.svg';
import CardImageOne from '../components/icons/cash.svg';
import CardImageTwo from '../components/icons/bids.svg';
import CardImageThree from '../components/icons/delivery.svg';
import CardImageFour from '../components/icons/drivers.svg';
import {Link} from 'react-router-dom';

class Course extends Component {
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
                    <Header username="feranmi Adeniji" pagename="Course" picture={User}/>
                    <div className="contentflex">
                    <div className="mainrow">
                        <div className="coursection">
                            <div className="coursetitle">
                                Classes
                            </div>
                            <div className="courselist">
                               <div className="courseclass">
                                   <ul>
                                       <li>
                                           Introduction to Electromagnetism
                                       </li>
                                       <li>
                                           Live
                                       </li>
                                       <li>
                                            <Link className="joinclass" to="/course/play">
                                                Join Class
                                            </Link>
                                       </li>
                                   </ul>
                               </div>
                               <div className="courseclass">
                                   <ul>
                                       <li>
                                           Introduction to Electromagnetism
                                       </li>
                                       <li>
                                           05/02/2021
                                       </li>
                                       <li>
                                           <Link className="joinclass"  to="/course/play">
                                                Watch Class
                                           </Link>
                                       </li>
                                   </ul>
                               </div>
                            
                            </div>  
                        </div>
                        <div className="coursection">
                            <div className="coursetitle">
                                Materials |  Tutorials
                            </div>
                            <div className="courselist">
                               
                                <div className="courseclass">
                                   <table>
                                       <thead>
                                           <th>
                                               Course Title
                                           </th>
                                           <th>
                                               Date Uploaded
                                           </th>
                                           <th>

                                           </th>
                                       </thead>
                                       <tbody>
                                           <tr>
                                                <td>
                                                    Introduction to Magnetism
                                                </td>
                                                <td>
                                                    23/04/2021
                                                </td>
                                                <td>
                                                        <Link className="joinclass" to="#">
                                                            Download
                                                        </Link>
                                                </td>
                                           </tr>
                                           <tr>
                                                <td>
                                                    Introduction to Magnetism
                                                </td>
                                                <td>
                                                    23/04/2021
                                                </td>
                                                <td>
                                                        <Link className="joinclass" to="#">
                                                            Download
                                                        </Link>
                                                </td>
                                           </tr>
                                      
                                       </tbody>
                                   </table>
                               </div>
                            </div>  
                        </div>
                        <div className="coursection">
                            <div className="coursetitle">
                                Quizzes and Assignments
                            </div>
                            <div className="courselist tracking">
                               
                                <div className="courseclass">
                                   <table className="tracking">
                                       <thead>
                                           <th>
                                               
                                           </th>
                                           <th>
                                               Date Uploaded
                                           </th>
                                           <th>
                                                Due Date
                                           </th>
                                           <th>
                                               Status
                                           </th>
                                       </thead>
                                       <tbody>
                                           <tr>
                                                <td>
                                                    Assignment 1
                                                </td>
                                                <td>
                                                    23/04/2021
                                                </td>
                                                <td>
                                                    27/04/2021
                                                </td>
                                                <td>
                                                    <label class="label completed">Completed</label>
                                                </td>
                                           </tr>
                                           <tr>
                                                <td>
                                                Assignment 2
                                                </td>
                                                <td>
                                                    23/04/2021
                                                </td>
                                                <td>
                                                    27/04/2021
                                                </td>
                                                <td>
                                                    <label class="label in-progress">Pending</label>
                                                </td>
                                           </tr>
                                           
                                       </tbody>
                                   </table>
                               </div>
                                
                            </div>  
                        </div>
                    
                    </div>
                    <div className="siderow course coursee">
                        <div className="card">
                            <div className="card-body">
                                <div class="colname flex">
                                    <div className="colm">
                                        <img src={Feranmi} width="100" height="100"/>
                                    </div>
                                    <div className="colm">
                                    <ul>
                                        <li>
                                            Dr Feranmi Adeniji (Phd, Msc,GMSE)
                                        </li>
                                        <li>
                                            Department of Mathematics
                                        </li>
                                        <li>
                                            School of Social Sciences
                                        </li>
                                        <li>
                                            Email: devferanmi@gmail.com
                                        </li>
                                        <li>
                                            <button class="savebtn">
                                                Message Tutor
                                            </button>
                                        </li>
                                    </ul>
                           
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    
                        <div className="card">
                            <div className="card-title">
                                Announcements
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                    Monday class is now holding on Monday
                                    </li>
                                    <li>
                                        We have a test on Sunday
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
 
export default Course;
