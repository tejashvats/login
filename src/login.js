import React from 'react';
import { useState } from 'react';

function Login(){
    const [user,setUser] = useState(0);
    const [password,setPassword] = useState(0);
    const [error,setError] = useState(false);
    const [perror,setPerror] = useState(false);
   function loginhandel(e){
    alert("login");
        e.preventDefault();
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3) {
            console.warn("username is too short");
        setError(true);
    }
    else{
        setError(false);
    }
}
    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3) {
            console.warn("username is too short");
        setPerror(true);
    }
    else{
        setPerror(false);
    }
       
    }
  
    return(
        <div>
            
            < h1> Login </h1>
            <form onSubmit={loginhandel}>
            <input type="text" placeholder="Username" onChange={userHandler} />{error? <span>invalid </span> : null}
            <br /><br />
            <input type="password" placeholder="Password" onChange={passwordHandler} />{perror? <span>invalid </span> : null}
            <br /><br />
            <button type='submit'> Login </button>
            </form> 
           </div>   
           )

}
export default Login;