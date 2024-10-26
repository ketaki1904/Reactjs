//Higher order function in react
//index.js
{
  path:'/Mountain',
  element:<Mountain name="ketaki" email="ketaki123@gamil.com" contact="9880445312"/>
}

//mountain .js
import React from "react";

const Mountain=({name,email,contact})=>{
    return(
        <>
        <h1 className="mt-5">These is the Higher Order function</h1>
        <h1>Hi My Name Is{name} and my email is {email} and my contact number is {contact} </h1>
        </>
    )
}
export default Mountain;
