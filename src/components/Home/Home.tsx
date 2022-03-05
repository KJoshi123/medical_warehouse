import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Home : React.FC = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        if(window.localStorage.getItem('login')=="false"){
            navigate('/');
        }
    },[])
    return(
        <div>
            This is home
        </div>
    )
}

export default Home;