//Higher order function in react
//index.js
{
  path:'/Mountain',
  element:<Mountain name="ketaki" email="ketaki123@gamil.com" contact="9880445312"/>
}

//mountain .js
import React, { useEffect, useState } from "react";

const Mountain=({name,email,contact})=>{
    const[count,updatecount]=useState(0);
    const[data,setData]= useState([]);
    const[form, setForm]=useState('');
    const getdata=()=>{
        alert(`${form}`);
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(resp=>resp.json()).then(json=>{
            console.log(json);
            setData(json);
        },[])
      
    })
    return(
        <>
        <h1 className="mt-5">These is the Higher Order function</h1>
        <h1> Hi My Name is {name} and my gamil{email}and my contact no is{contact}</h1>
        <button onClick={()=>alert("this is onclick event")}>click</button>
        <h1>{count}</h1>
        < button onClick={()=>{updatecount(count+1)}}>updatecount</button>
        {
            data.map((x)=>(
                <div key={x.id}>
                    <h1>{x.title}</h1>
                </div>
            ))
        
        }
        <h1> these is how we will execute the form validation</h1>
        <form onSubmit={()=>{getdata()}}>
            <input value={form} onChange={(e)=>{setForm(e.target.value)}} className="form-control" placeholder="Enter your name"/>
            <button className="btn btn-primary" type="submit">submit</button>
        </form>
        </>
    )
}
export default Mountain;




        

