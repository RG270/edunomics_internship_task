import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                <div class='container-fluid bg-black'>
                    <div class='row bg-dark p-5'>
                        <div class='col-5 text-center p-5 m-3 bg-white rounded'>All Interactive Sessions</div>
                        <div class='col-5 text-center p-5 m-3 bg-white rounded'>Practice Questions</div>
                        <div class='col-5 text-center p-5 m-3 bg-white rounded'>Downloads</div>
                        <div class='col-5 text-center p-5 m-3 bg-white rounded'>Ask Questions</div>
                    </div>
                    
                    <div class='row'>
                        <div class='col-5 m-3 rounded border border-dark'>Topics covered
                            <div class='p-5'></div>
                        </div>
                        <div class='col-5 m-3 rounded border border-dark'>Recent Activities
                            <div class='p-5'></div>
                        </div>
                        <div class='col-11 m-3 rounded border text-center border-dark'>Performance
                            <div class='p-5'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
