import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import '../components/css/tracking.css';


class Drivers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            email:'',
            id:'',
            location:'',
            created:true,
            modal:false
        }
        this.handleAddDriver = this.handleAddDriver.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    async handleAddDriver(){
        this.toggleModal();
        
    }
    toggleModal(){
        this.setState({modal:!this.state.modal});
    }
    closeModal(e){
        if(e.target===e.currentTarget){
            this.toggleModal();
        }
    }
    
    render() { 
        return ( 
            
            <div className="contents">
                <Header username="DHL Logistics" picture={User}/>
                <div className="content">
                        <div className="contentitle">
                            Drivers
                            <div className="metrics">
                                <ul>
                                    <li className="active">
                                       All
                                    </li>
                                    <li className="inactive">
                                        Verified
                                    </li>
                                   <li>
                                       Ban
                                   </li>
                                </ul>
                            </div>
                        </div>
                        <div className="filtercontainer">
                            <div className="filters">
                                <button className="btn btn-adddriver" onClick={this.handleAddDriver}>
                                    <i className="fa fa-plus"></i>
                                    Add Driver
                                </button>
                                 
                               
                            </div>
                        </div>
                </div>
                <div className="dashboardstats col-md-12 marketcards tracking">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    DRIVER
                                </th>
                                <th>
                                    EMAIL
                                </th>
                                <th>
                                    LOCATION
                                </th>
                                <th>
                                    PHONE NUMBER
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
                                    devferanmi@gmail.com
                                </td>
                                <td>
                                    113 Cresent Road, Ikorodu, Lagos, Nigeria
                                </td>
                                <td>
                                   +234 81070 34667
                                </td>
                                <td>
                                    <i className='fa fa-trash'></i>
                                    <i className='fa fa-ban'></i>
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
                                    devferanmi@gmail.com
                                </td>
                                <td>
                                    113 Cresent Road, Ikorodu, Lagos, Nigeria
                                </td>
                                <td>
                                   +234 81070 34667
                                </td>
                                <td>
                                    <i className='fa fa-trash'></i>
                                    <i className='fa fa-check'></i>
                                </td>
                            </tr>
                            
                        
                        </tbody>
                    </table>
                </div>

                <div className={this.state.modal ? 'appmodal' : 'hidden'} onClick={this.closeModal}>
                    <div className="modalcontent">
                        <div className="modaltitle">
                            Add Driver
                        </div>
                        <div className="modalbody">
                            <div className="forminput">
                                <label for="name">Name</label>
                                <input type="text" placeholder="Driver name" className="modalinput"/>
                            </div>
                            <div className="forminput">
                                <label for="name">Email Address</label>
                                <input type="email" placeholder="Email Address" className="modalinput"/>
                            </div>
                            <div className="forminput">
                                <label for="name">Employee ID</label>
                                <input type="tel" placeholder="DHL/90/HJ72923EP" className="modalinput" disabled/>
                            </div>
                            <div className="forminput">
                                <label for="name"> Location</label>
                                <input type="text" placeholder="Location" className="modalinput"/>
                            </div>
                            
                        </div>
                        <div className="modalfooter">
                            <button className="adddriver">
                                Create Driver
                            </button>
                        </div>
                    </div>
                </div>



                
            </div>
         );
    }
}
 
export default Drivers;