import React,{useEffect,useState} from 'react';
import { checkLogin, createDB} from '../../dexie/dexie';
const Landing : React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        localStorage.setItem('login', 'false');
        createDB();
    }, []);

    const submitForm = async (e : any) => {
        e.preventDefault();
        
        const result = await checkLogin(username,password);
        if(result){
            setMessage("login success");
            localStorage.setItem('login','true');
        }
        else{
            setMessage("invalid creads");
            localStorage.setItem('login', 'false');
        }
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <label>Username : </label>
                <input type="text" placeholder='UserName or name' onChange={(e) => setUsername(e.target.value)}/>
                <label>Password : </label>
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                <button>Enter</button>
            </form>
            <h5>{message}</h5>
        </div>
    )
}

export default Landing;