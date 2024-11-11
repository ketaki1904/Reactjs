import React, {useState} from "react";
import Navbartop from "./Navbartop";
import axios from 'axios';
import { json } from "react-router-dom";
function Quotes(){

    const[quotes,SetQuotes]=useState([]);

    const[title,SetTitle]=useState('');

    const[verbs,SetVerbs]=useState('');

   // const updateData=async()=>{
     //  const resp=await fetch('http://localhost:3005/quotes')
       // resp=await resp.json();
        //SetQuotes(resp);
    //}

    const url='http://localhost:3005/quotes'

     axios.get(url).then(resp=>{               //
        console.log(resp.data)
        SetQuotes(resp.data)
    })

    const upData={
        author:title,
        quote:verbs
        
    }
    const Delete =(id) =>{
        fetch(`http://localhost:3005/quotes/${id}`,{
            method:"DELETE"

        }).then(
            SetQuotes(quotes.filter(item=>item.id!==id))
        )
    }

    const submitData=() =>{
        fetch('http://localhost:3005/quotes',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(upData)
        })
    }
    //useEffect(()=>{
      //  updateData(

      //  )
    //})
    return(
        <div>
            <Navbartop/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <h1 className="mt-3 mb-3 text-center">Welcome  to my site To get Best Quote In Your  Message </h1>
          <h3 className="text-center">Enter Your Quotes on your DataBase</h3>
          <form onSubmit={submitData} className="mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <input  value={title} onChange={(e)=>{SetTitle(e.target.value)}} className="form-control" placeholder="Enter your Name"/>
                        </div>

                        
                        <div className="col-lg-6">
                        <input  value={verbs} onChange={(e)=>{SetVerbs(e.target.value)}} className="form-control" placeholder="Enter your Quote"/>

                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary ms-auto">submit</button>


            </div>
          </form>
          {
                quotes.map((x)=>(
                    <div key={x.quote}>
                        <div className="card w-75 mx-auto mb-4">
                            <div className="card-body">
                                <h2>Person:{x.author}</h2>
                                <p> Quote:{x.quote}</p>
                                <button className="btn btn-primary ms-auto"onClick={()=>{Delete(x.id)}}>Delete</button>

                            </div>

                        </div>
                    </div>

                ))
            }
                
        
        
       </div>
    )
}
export default Quotes