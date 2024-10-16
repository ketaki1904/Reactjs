//search algo key and Delete cards

import React, { useEffect, useState } from 'react';
import Navbartop from './Navbartop';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { json } from 'react-router-dom';
function App() {

  const [Flight, setFlight] = useState([]);
  const [search,setSearch]=useState('')
  useEffect(() => {
    fetch('http://localhost:3009/data').then(resp => resp.json()).then(json => {
      console.log(json);
      setFlight(json);
    })
  }, [])
  const Delete = (id) =>{
    fetch(`http://localhost:3009/data/${id}`, {
      method:"Delete",
     }).then(()=>{
      setFlight(Flight.filter(item=>item.id!==id));

    })
  }
  


  return (
    <div>
      <Navbartop />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className='desplay-5 text-center'>These is the Data Of Flight Details</h1>
      <form>
        <div className='row mt-5'>
          <div className='col-lg-6 mx-auto'>
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='form-control' placeholder='Search Your Flight Details'>
            </input>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row lg={4}>
        {
          Flight.filter((flights)=>{
             if(search===""){
              return true;
             }else{
              return search.toLowerCase()===''?Flight:flights.title.toLowerCase().includes(search);
             }
          }).map((x) => (
            <Col>
            <div key={x.id}>
              <div className='container'>
              
                <div className='card' style={{ width: "18rem" }}>
                  <img src={x.image} alt='flight-data' />
                  <div className='card-body'></div>
                  <div className='card-title h3'>{x.title}</div>
                  <div className='card-title'>Airline:{x.airline}</div>
                  <div className='card-title'>captain Name:{x.captain}</div>
                  <div className='card-title'>Flight Details:{x.details}</div>
                  <div className='card-title'>Status:{x.Status}
                    <button className='mt-3 btn btn-primary'onClick={()=>{Delete(x.id)}}>Delete</button>
                  </div>
                      </div>
                </div>
            </div>
            </Col>
     ))
          }
          </Row>
         
   </div>
  )
}
export default App;import React, { useEffect, useState } from 'react';
import Navbartop from './Navbartop';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { json } from 'react-router-dom';
function App() {

  const [Flight, setFlight] = useState([]);
  const [search,setSearch]=useState('')
  useEffect(() => {
    fetch('http://localhost:3009/data').then(resp => resp.json()).then(json => {
      console.log(json);
      setFlight(json);
    })
  }, [])
  const Delete = (id) =>{
    fetch(`http://localhost:3009/data/${id}`, {
      method:"Delete",
     }).then(()=>{
      setFlight(Flight.filter(item=>item.id!==id));

    })
  }
  


  return (
    <div>
      <Navbartop />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className='desplay-5 text-center'>These is the Data Of Flight Details</h1>
      <form>
        <div className='row mt-5'>
          <div className='col-lg-6 mx-auto'>
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='form-control' placeholder='Search Your Flight Details'>
            </input>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row lg={4}>
        {
          Flight.filter((flights)=>{
             if(search===""){
              return true;
             }else{
              return search.toLowerCase()===''?Flight:flights.title.toLowerCase().includes(search);
             }
          }).map((x) => (
            <Col>
            <div key={x.id}>
              <div className='container'>
              
                <div className='card' style={{ width: "18rem" }}>
                  <img src={x.image} alt='flight-data' />
                  <div className='card-body'></div>
                  <div className='card-title h3'>{x.title}</div>
                  <div className='card-title'>Airline:{x.airline}</div>
                  <div className='card-title'>captain Name:{x.captain}</div>
                  <div className='card-title'>Flight Details:{x.details}</div>
                  <div className='card-title'>Status:{x.Status}
                    <button className='mt-3 btn btn-primary'onClick={()=>{Delete(x.id)}}>Delete</button>
                  </div>
                      </div>
                </div>
            </div>
            </Col>
     ))
          }
          </Row>
         
   </div>
  )
}
export default App;
