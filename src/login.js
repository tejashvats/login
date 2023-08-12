import React, {useState} from 'react';

function login(){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
   function loginhandel(e){
        e.preventDefault();
    }
    return(
        <div>
            
            < h1> Login </h1>
            <form onSubmit={loginhandel}>
            <input type="text" placeholder="Username" />
            <br /><br />
            <input type="password" placeholder="Password" />
            <br /><br />
            <button type='submit'> Login </button>
            </form> 
           </div>   
           )
}
export default login;