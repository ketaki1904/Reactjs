import React, { useEffect, useState } from 'react'
function App() {
   const[data,setData]=useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
       setData(json)
      });
  },[])
  

  return (

      <>
      {
          data.map((x)=>(
            <div>
              <h1>{x.id}</h1>
            </div>

          ))
        }
        </>

  )
}

export default App;