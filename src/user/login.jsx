import { useState } from "react"
import AXIOS from 'axios'




function Login()
{
    
    const [user,setUser] = useState({})

    const handleChange = (e)=>
        {
            setUser({...user,[e.target.name]:e.target.value})
        }

    const handleSubmit = (e)=>
        {
            e.preventDefault()
            console.log(user)

            AXIOS.post('http://localhost:9000/user/login',user)
            .then((res)=>
            {
                alert(res.data)
            })
            .catch(err=>{console.log(err)})

            
        }
    return(
        <>
           <form action="" method="post" style={{marginTop:'120px'}} onSubmit={handleSubmit}>
            <div className="login-border">

            <div className="reg-wrapper">
                <div className="container1">
                

                <div className="reg-container">
                    <label>Email: </label>
                    <input type="email" name="email" onChange={handleChange}></input>
                </div>
                <br/>

                <div className="reg-container">
                    <label>Password: </label>
                    <input type="password" name="password" onChange={handleChange}></input>
                </div>
                <br/>

                

                <div className="reg-container">
                    <button id="login-btn" type="submit">Login</button>
                    <a href="/register">Register</a>
                </div>
                </div>
            </div>
            </div>
           </form>
        </>
    )
}
export default Login