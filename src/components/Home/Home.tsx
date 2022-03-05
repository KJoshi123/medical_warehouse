import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Home : React.FC = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        if(window.localStorage.getItem('login')==="false"){
            navigate('/');
        }
    },[])
    return(
        <div>
            <div className = "serchdiv">
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
    )
}

export default Home;