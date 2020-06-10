import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
    render() {
        return (
                <div className='col-3 sidebar p-0 text-white'>
                    <div className="sidebar-button text-center p-2">
                        <Link to='/user/'>
                            <button class='btn text-white'>Home</button>
                        </Link>
                    </div>
                    <div className="sidebar-button text-center p-2">
                        <Link to='/user/'>
                            <button class='btn text-white'>Sessions</button>
                        </Link>
                    </div>
                    <div className="sidebar-button text-center p-2">
                        <Link to='/user/'>
                            <button class='btn text-white'>Downloads</button>
                        </Link>
                    </div>
                    <div className="sidebar-button text-center p-2">
                        <Link to='/user/'>
                            <button class='btn text-white'>Settings</button>
                        </Link>
                    </div>
                    <div className="sidebar-button text-center p-2">
                        <Link to='/user/'>
                            <button class='btn text-white'>About</button>
                        </Link>
                    </div>
                </div>
        )
    }
}

export default Sidebar