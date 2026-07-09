import { useState } from "react";
const WelcomePage = ({islogged}) => {

    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) =>{
        event.preventDefault();
        if(userName && password){
            setIsLogged(true);
        }
    }
    const handleLogout= (event) => {
        setUserName('');
        setPassword('');
        setIsLogged(false)
    }
    if(isLogged){
        return(
            <div>
                <h2>Welcome {userName}</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }

    return (
       <form onSubmit={handleLogin}>
         <div>
        <h2>Login</h2>
        <label>Username</label>
        <input type="text" required value={userName} onChange={(e)=>setUserName(e.target.value)}/><br/>
        <label>Password</label>
        <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button>login</button>
        </div>
       </form>
    )
}
export default WelcomePage;