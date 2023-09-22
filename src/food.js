import React,{useState} from "react";
import {useLocation} from 'react-router-dom';
import data from "./veg.json";
import "./index.css"

const Food=()=>{
    const [searchid,setSearchid]=useState(' ');
    let {search}=useLocation();
    let params=new URLSearchParams(search);
    const [pass,setPass]=useState(params.get('pass'));
   
    return(
       
        
        <div class="food-box">
            <center>
            <div className="searching">
                    <input type="text" placeholder="search" value={searchid} onChange={(e)=>setSearchid(e.target.value)}></input>
                    <h1>{console.log(searchid)}</h1>
                    <hr></hr>
            </div>
            
            
            {(searchid == ' ')?
                <div className="row-top">
            
                {
                    data.filter(post=>post.type===pass).map(post=>
                        <div className="food-items">
                        <div class="box-top" style={{"width":"18rem"}}>
                        <img class="card-img" src={post.image} alt="card image cap" />
                        <div class="card-body">
                            <center>
                                <h5 class="card-title">{post.name}</h5>
                                <p class="card-text">Total Amount of Calories: {Math.round(post.calories)}</p>
                                <a href="#" class="btn btn-primary">Buy</a>
                            </center>
                        </div>
                        </div>
            </div>
            )
                }
            </div>
            :
            <div className="row-top">
                {
                    data.filter(item=>item.name.toLowerCase().includes(searchid.toLowerCase()) && item.type===pass).map(item=>
                        <div className="food-items">
                        <div class="box-top" style={{"width":"18rem"}}>
                        <img class="card-img" src={item.image} alt="card image cap" />
                        <div class="card-body">
                            <center>
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">Total Amount of Calories: {Math.round(item.calories)}</p>
                                <a href="#" class="btn btn-primary">Buy</a>
                            </center>
                        </div>
                        </div>
                        </div>  
                    )
                }
            </div>
            }
            </center>
        </div>
            
    )
}

export default Food;