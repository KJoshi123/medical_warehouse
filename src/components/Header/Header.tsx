import React, {useEffect,useState} from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header : React.FC = () => {

    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        window.localStorage.setItem('login','false');
        setShowLogout(false);
        navigate("/");
    }

    useEffect(() => {
        if(window.localStorage.getItem('login')==='true'){
            setShowLogout(true);
        }
        else{
            setShowLogout(false);
        }
    },[])
    return(
        <div className="HeaderClass">
            <h1 className="headtext">The Warehouse</h1>
            { 
                <button className="buttontext" onClick={logout}>Logout</button>
            }
        </div>
    )
}

export default Header;