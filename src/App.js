import React from "react";
import Home from "./home";
import Food from "./food";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import "./index.css";



const App=()=>{
    return(
        <>
        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
        </Routes>
    </BrowserRouter>
    </>
)}
    
   
export default App;