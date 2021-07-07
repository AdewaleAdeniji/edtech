import React,{Component} from 'react';
import { Button } from '../components/uikits';

class Login extends Component {
    state = {
        email:'',
        password:''
    }
    componentDidMount() {
        
    }
    render() { 
        return (
            <div>
                <div className="logincontainer">
                    <div className="loginarea">
                    <h1>
                        LOGO
                    </h1>
                    <div id="smalltext">Log in to access dashboard</div>
                    <div className="logincard">
                        <input type="email" placeholder="Email Address" id="emailaddress" className="formfield"/>
                        <input type="password" placeholder="Password" id="password" className="formfield"/>
                        <div className="altlinks col-md-12">
                        <div className="forgot">
                            <a href="#">Forgot Password</a>
                        </div>
                        <div className="remember">
                                
                                <input type="checkbox" className="remembercheck" id="remembercheck"/>
                                <label htmlFor="remembercheck">Remember Me</label>
                        </div>
                        </div>
                        <Button text={"Login to Dashboard"} classname="buttonlogin"/>
                    </div>  
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Login;