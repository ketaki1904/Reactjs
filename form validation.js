//Form validation in React
import React, { Component } from "react";
import Navbartop from "./Navbartop";
class Mountain extends Component {
    constructor() {
        super();
        this.state = {
           name:'',
            surname:'',
        }
    }
  <h1 className="text-center">These is Form Validation in React </h1>
                <form onSubmit={()=>{submitData()}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <input  value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} className="form-control" placeholder="Enter The Name" />
                            </div>

                            <div className="col-lg-6">
                                <input value={this.state.surname} onChange={(e)=>{this.setState({surname:e.target.value})}} placeholder="Enter The surName" />
                            </div>
                        </div>
                        <button type="Submit" className="btn btn-primary mt-3"> submit</button>
                    </div>
                </form>


            </>
        )
    }
