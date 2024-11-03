import React from "react";
import Navbartop from "./Navbartop";
function Mountain(){
    return(
<div>
<Navbartop/>
<br>
</br>
<h1>This is Mountain</h1>

</div>
    )
}
export default Mountain




import React, { Component } from "react";
import Navbartop from "./Navbartop";
class Mountain extends Component {
    constructor() {
        super();
        this.state = {
            email: "ketu.15@gmail.com",
            color: 'red',
            address: "at post sayyed pimpri tal dist nashik ",
            name: '',
            surname: '',
        }
    }
    Email() {
        this.setState({
            email: 'boney @gmaol.com'
        })
    }
    render() {
        let address = () => {
            this.setState({
                address: "banglore backry pune"
            })
        }
        let submitData = () => {
            alert(`My Name is :${this.state.name}and my surname is ${this.state.surname}`)
        }
        const Mountain=()=>{
            return(
                <>
                <h1> This is Higher Order Component</h1>
                </>
            )
        }

        return (
            <>
                <Navbartop />
                <br />
                <br />
                <br />
                <br />
                <h1 className="mt-5 mb-5 text-center">Hi my name is {this.props.name}    my Email id is{this.props.email}   my contact no is {this.props.contact}</h1>
                <h1 className="mt-5 mb-5 text-center"> My email adresss is  {this.state.email} and the proper adress is {this.state.address}</h1>
                <button className="btn btn-primary" onClick={() => (this.Email())}>change the Email</button>
                <button className="btn btn-primary" onClick={() => (address())}>change the adress</button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="text-center">These is Form Validation in React </h1>
                <form onSubmit={() => { submitData() }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <input value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} className="form-control" placeholder="Enter The Name" />
                            </div>

                            <div className="col-lg-6">
                                <input value={this.state.surname} onChange={(e) => { this.setState({ surname: e.target.value }) }} placeholder="Enter The surName" />
                            </div>
                        </div>
                        <button type="Submit" className="btn btn-primary mt-3" > submit</button>
                    </div>
                </form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="text-center mt-5 mb-5">Css in Class Component</h1>
                <br />
                <div className="mx-auto" style={{ border: "1px solid black", width: "225px", height: "225px", backgroundColor: this.state.color }}></div>
                <button className="btn btn-primary" onClick={() => { this.setState({ color: "pink" }) }}>Change the Background</button>
                <h1 className="text-center mt-5 mb-5"> Find The pythogorus therom value by using c=a2+b2</h1>
                <form>
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-6">
                                <input className="form-control" placeholder="Enter the value A"/>

                            </div>
                            <div className="col-lg-6">
                                <input className=" form-control"placeholder="Enter the value B"/>

                            </div>
                        </div>
                        <h2 className="mt-3 mb-3">And Your Ans is:</h2>
                        <button className="btn btn-primary">Submit</button>


                    </div>
                </form>

                </>
                )
                }
                }

                        export default Mountain;



