import React, { Component } from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import './components/css/modal.css';
import Login from './pages/login';
import NavBar from './components/navbar';
import MarketPlace from './pages/market';
import Finance from './pages/finance';
import Assign from './pages/assign';
import Tracking from './pages/tracking';
import Drivers from './pages/drivers';
import Employees from './pages/employees';
import Courses from './pages/courses';
import Results from './pages/results';
import Result from './pages/result';
import Timetable from './pages/timetable';
import Downloads from './pages/downloads';
import Course from './pages/course';

class App extends Component {
  state = { 
    loggedin:false,
    
  }
  
  render() { 
    return (
        <BrowserRouter>
          <NavBar handlePush={this.handlePush}/>
          <Switch>
            
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Dashboard}/>
            <Route path="/market" component={MarketPlace}/>
            <Route path="/finance" component={Finance}/>
            <Route path="/assign" component={Assign}/>
            <Route path="/tracking" component={Tracking}/>
            <Route path="/drivers" component={Drivers}/>
            <Route path="/employees" component={Employees}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/results" component={Results}/>
            <Route path="/result/:id" component={Result}/>
            <Route path="/timetable" component={Timetable}/>
            <Route path="/downloads" component={Downloads}/>
            <Route path="/course" component={Course}/>
            <Route component={Login} />
          </Switch>
        </BrowserRouter>
      );
  }
}
 
export default App;

