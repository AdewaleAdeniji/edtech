import React, { Component } from 'react';
import {Header} from '../components/uikits';
import User from '../components/icons/user.png';
import '../components/css/market.css';
import '../components/css/tracking.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal:false,
            accesschosen:'',
            access:[
                
            ]


         }
         this.handleAddEmployee = this.handleAddEmployee.bind(this);
         this.toggleModal = this.toggleModal.bind(this);
         this.closeModal = this.closeModal.bind(this);
         this.handleRemoveAccess = this.handleRemoveAccess.bind(this);
         this.handleAddAccess = this.handleAddAccess.bind(this);
         this.handleAccessChange = this.handleAccessChange.bind(this);
     }
     async handleAddEmployee(){
         this.toggleModal();   
     }
     toggleModal(){
         this.setState({modal:!this.state.modal});
     }
     inform(message){
         
        toast.info(message,{
            position: toast.POSITION.BOTTOM_CENTER
        });
     }
     closeModal(e){
         if(e.target===e.currentTarget){
             this.toggleModal();
         }
    }
    handleRemoveAccess(e){
        var permission = e.target.attributes.getNamedItem('itemkey').value;
        var accesses = this.state.access;
        var newaccess = accesses.splice(permission,1);
        if(accesses.length===0){
            var newaccess = [];
        }
        this.setState({access:newaccess});
    }
    async handleAddAccess(accesschosen){
        // console.log('clicked');
        
        if(accesschosen!=undefined){
            var access = accesschosen;
         }
        else {
            var access = this.state.accesschosen;
        }
        
        var obj = new Object();
        if(access!==''&&typeof(access)==='string'){
            if(access==='assign-package'){
                obj.name = 'Assign Package';
                obj.code = access;
            }
            else {
                obj.code = access;
                obj.name = "Manage Drivers";
            }
        var accesses = this.state.access;
        accesses.push(obj);
        await this.setState({access:accesses});
        }
        else {
            this.inform('Access cannot be empty');
        }
    }
    async handleAccessChange(e){
        await this.setState({accesschosen:e.target.value});
        
        this.handleAddAccess(e.target.value);
        e.target.remove(e.target.selectedIndex);
    }
    render() { 
        return ( 
            
            <div className="contents">
                <Header username="DHL Logistics" picture={User}/>
                <div className="content">
                        <div className="contentitle">
                            Employees
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
                                <button className="btn btn-adddriver" onClick={this.handleAddEmployee}>
                                    <i className="fa fa-plus"></i>
                                    Add Employees
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
                                    EMPLOYEE NAME
                                </th>
                                <th>
                                    EMAIL
                                </th>
                                <th>
                                    ACCESS
                                </th>
                                <th>
                                    ACTION
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
                                    Manage Users
                                    <br/>
                                    Assign Package
                                </td>
                                <td>
                                    <i className='fa fa-trash'></i>
                                    <i className='fa fa-ban'></i>
                                </td>
                            </tr>
                            
                        
                        </tbody>
                    </table>
                </div>


                <div className={this.state.modal ? 'appmodal' : 'hidden'} onClick={this.closeModal}>
                    <div className="modalcontent">
                        <div className="modaltitle">
                            Add Employee
                        </div>
                        <div className="modalbody">
                            <div className="forminput">
                                <label for="name">Name</label>
                                <input type="text" placeholder="Employee name" className="modalinput"/>
                            </div>
                            <div className="forminput">
                                <label for="name">Email Address</label>
                                <input type="email" placeholder="Email Address" className="modalinput"/>
                            </div>
                            <div className="forminput">
                                <label for="name">Phone Number</label>
                                <input type="tel" placeholder="Phone Number" className="modalinput"/>
                            </div>
                            <div className="forminput">
                                <label for="name">Employee ID</label>
                                <input type="tel" placeholder="DHL/90/HJ72923EP" className="modalinput" disabled/>
                            </div>
                            <div className="forminput">
                                <label for="name">Access</label>
                                <div className="permissions">
                                    <ul>
                                        {
                                            this.state.access.map((item,index)=>{
                                                return (
                                                        <li className="permission" key={index}>
                                                            {item.name}  <i className='fa fa-trash' itemkey={index} onClick={this.handleRemoveAccess.bind(this)}></i>
                                                        </li>
                                                )
                                            })
                                        }
                                       
                                        
                                    </ul>
                                </div>
                                <select className="modalselect" id="selectaccess" onChange={this.handleAccessChange}>
                                    <option value=""></option>
                                    <option value="assign-package">Assign Package</option>
                                    <option value="manage-drivers">Manage Drivers</option>
                                </select> 
                                <button className="addaccess btn" onClick={this.handleAddAccess}><i className='fa fa-plus'></i> Add Access</button>
                            </div>
                            
                        </div>
                        <div className="modalfooter">
                            <button className="adddriver">
                                Create Employee
                            </button>
                        </div>
                    </div>
                </div>


                <ToastContainer />
            </div>
         );
    }
}
 
export default Employees;