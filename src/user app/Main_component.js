import React, { useState } from "react";
import './App.css';
import {Users_data} from './Datas';
import Table from "./Table";



function Main(){
    const [query,setquery]=useState("")

   const search=(data)=>{
  return data.filter((item)=>item.first_name.toLowerCase().includes(query.toLowerCase()));

 }
    
    return(
        <div className="container">
            <h1 className="user-header">User Details</h1>
        <input className="form-control"
        type="text" 
        placeholder="search..."
        
        onChange={e=>setquery(e.target.value)}
        
        />
        <Table data={search(Users_data)}/>
        {/* <ul className="list">
            {Users_data.filter((user) => 
            user.first_name.toLowerCase().includes(query.toLocaleLowerCase())).map((data) => ( 
            <li key ={data.id} className="listItem">{data.first_name}</li>
            ))}
           
            
         
        </ul>   */}
        </div>
    )
}
export default Main;