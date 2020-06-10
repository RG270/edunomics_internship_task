import React, { Component } from 'react'
import './Sign_up.css'
import Bgimage from './signin_page_bg.jpg'
import { Link } from 'react-router-dom'

class Sign_up extends Component {
    
    constructor(props) {
        super()
        
    }
    
    render() {
        return (
            <div className="container m-o p-0">
                <img src={Bgimage} alt="book" className="bg-image" ></img>
                <div class='form text-white'>
                    <h2 class="heading">SIGN UP</h2>
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label>Email Id</label>
                            <input type="text" class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label>Mobile Number</label>
                            <input type="text" class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="text" class="form-control"></input>
                        </div>
                        <div class="form-group">
                            <Link to="/" class="btn btn-success" type="submit" onClick={this.submit_event}>Sign Up</Link>
                        </div>
                    </form>
	            </div>
            </div>
        )
    }
}

export default Sign_up