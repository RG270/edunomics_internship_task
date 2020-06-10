import React, { Component } from 'react'
import './Userpage.css'
import { Link } from 'react-router-dom'
import Home from './Home'
import Sessions from './Sessions'
import Downloads from './Downloads'
import Settings from './Settings'
import About from './About'
import { Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar'

export class Userpage extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div class='top-navbar'>
                    <span className='font-weight-bold heading'> Welcome to Edunomics</span>
                    <div class="dropdown float-right mr-5">
                        <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Account
                        </button>
                        <div class="dropdown-menu btn" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item btn" type="button">My Profile</button>
                            <Link to="/"><button class="dropdown-item btn" type="button">Log Out</button></Link>
                        </div>
                    </div>
                </div>
                
                <div class='container-fluid m-0 p-0'>
                    <div class='row p-0'>
                    
                        <Sidebar />
                        
                        <div class='col-9 p-0'>
                            <Switch>
                                <Route exact path='/user/' component={Home}></Route>
                                <Route exact path='/user/Sessions' component={Sessions}></Route>
                                <Route exact path='/user/Download' component={Downloads}></Route>
                                <Route exact path='/user/Settings' component={Settings}></Route>
                                <Route exact path='/user/About' component={About}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Userpage
