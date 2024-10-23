//Axios methhod to fetch the data

import React, { useState } from "react";
import Navbartop from "./Navbartop";
import axios from 'axios';
function Quotes(){

    const[quotes,SetQuotes]=useState([]);

    const url='http://localhost:3005/quotes'

    axios.get(url).then(resp=>{
        console.log(resp.data)
        SetQuotes(resp.data)
    })
    return(
        <div>
            <Navbartop/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <h1 className="mt-3 mb-3 text-center">Welcome  to my site To get Best Quote In Your  Message </h1>
          {
                quotes.map((x)=>(
                    <div key={x.quote}>
                        <div className="card w-75 mx-auto mb-4">
                            <div className="card-body">
                                <h2>Person:{x.author}</h2>
                                <p> Quote:{x.quote}</p>

                            </div>

                        </div>
                    </div>

                ))
            }
                
        
        
       </div>
    )
}
export default Quotes