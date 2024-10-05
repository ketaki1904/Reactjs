import  React, { useEffect, useState } from 'react';
import Navbartop from './Navbartop';
//import { json } from 'react-router-dom';
function App(){

  const[Flight,setFLight]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3009/data').then(resp=>resp.json()).then(json=>{
      console.log(json);
      setFLight(json);
    })
  },[])


  return(
    <div>
      <Navbartop/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <h1 className='desplay-5 text-center'>These is the Data Of Flight Details</h1>
    <form>
      <div className='row mt-5'>
        <div className='col-lg-6 mx-auto'>
          <input className='form-control'placeholder='Search Your Flight Details'>
          </input>
        </div>
      </div>
    </form>
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {
        Flight.map((x)=>(
          <div key={x.id}>
            <div className='card'style={{width:"18rem"}}>
            <img src={x.image} alt='flight-data'/>
            <div className='card-body'></div>
            <div className='card-title h3'>{x.title}</div>
            <div className='card-title h3'>Airline:{x.airline}</div>
            <div className='card-title h3'>captain{x.captain}</div>

            </div>
          </div>
        ))
      }
    </div>
  )
}
export default App;