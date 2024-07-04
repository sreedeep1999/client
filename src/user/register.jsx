import { useState } from "react"
import AXIOS from 'axios'


export default function Register(){
    const [formdata,setFormdata] = useState({});
    const handlechange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value})
 
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formdata)        
        
        //add your backend code here to save data to database.
        //after saving, you can redirect to login page or any other page.
        //you can use axios or fetch API for sending request to backend server.

        
                 AXIOS.post("http://localhost:9000/user/register",formdata);
                then((res)=>{
                    alert(res.data)
                })
                .catch(err=>console.log(err))
                    }


    return(

        <>
        
            <form methods="post" style={{marginTop:'120px'}}>
            <input type="text"
            placeholder="fullname"
            name="fulname"
           
            />

    <input type="email"
            placeholder="email"
            name="email"
            
            />

    <input type="password"
            placeholder="password"
            name="password"
            
            />



    <input type="tel"
            placeholder="mobile"
            name="tel"
           
            />

            <button type="submit">
                Create
            </button>


            </form>
        
        </>
    )
}