import React,{useState} from "react";
import {Link} from "react-router-dom";
import data from "./veg.json";
import "./index.css";
import logo from "./logo4.png";
import Food from "./food.js";

const Home=()=>{
    return(
        <div class="container">
            <div class="top-container">
                <div class="box">
                    <h1>FOODY ZONE</h1>
                </div>
                <div class="logo">
                <img src={logo} alt="logo" height="110px" width="160px" />    
                </div>
                
            </div>

            <div class="main">
                <div class="row1">
                    <Container type="veg"/>
                    <Container type="non-veg"/>
                </div>
            </div>
     
        </div>
       
    )
}
    

const Container=(props)=>{
    return(
       
        <div className="row">
            <center>
            <div class="flex">
                <div class="card-body">
                <center>
                <h3>{props.type}</h3>
                <Link to={`/food?pass=${props.type}`}><button class="btn btn-primary">Menu</button></Link>
                </center>
                </div>
            </div>
            </center>
        </div> 
    )
}

export default Home;