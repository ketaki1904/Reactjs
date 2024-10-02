import React, { useState } from "react";
import Navbartop from "./Navbartop";
import { Button } from "bootstrap";
function Fire() {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const[num,setnum]=useState('');
    const[gst,setgst]=useState('')

    const Data = () => {
        alert(`${first},${last}`)
    }

    return (
        <div>
        <Navbartop/>
        <br></br>
        
            <h1>This is Fire component</h1>

            <h1>This is the form validation in React</h1>
            <form onSubmit={()=>{Data()}}>
        
            <div className="row m-5">
                <div className="col-lg-6">
                    <input  value={first} onChange={(e)=>{setFirst(e.target.value)}} className="form-control" placeholder="first"></input>
                </div>
                <div className="col-lg-6">
                    <input  value={last} onChange={(e)=>{setLast(e.target.value)}}className="form-control" placeholder="last"></input>
                </div>

            </div>
            <button className="btn btn-primary m-5" type="submit">submit</button>
        </form>



        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>This is GST Calculater in React</h1>
        <form>
            <div className="container">
            <label>Enter the value to find GST of</label>
            <input value={num} onChange={(e)=>{setnum(e.target.value)}} className="form-control w-50 mt-3"></input>
            </div>
            <button className="btn btn-primary m-5" type="submit" onClick={()=>{setgst(num*0.18)}}>18%</button>
            <button className="btn btn-primary m-5" type="submit" onClick={()=>{setgst(num*0.12)}}>12%</button>
            <button className="btn btn-primary m-5" type="submit"onClick={()=>{setgst(num*0.28)}}>28%</button>
            <button className="btn btn-primary m-5" type="submit"onClick={()=>{setgst(num*0.80)}}>80%</button>
        </form>
        <h1>And your Additional Gst on the given amount is:<span>{gst}</span></h1>


</div>
        

    )
}
export default Fire