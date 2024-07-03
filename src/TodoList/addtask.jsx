import { useState } from "react"
import AXIOS from 'axios';



function Addtask()
{
    const [task,setTask] = useState({})

    const handleChange = (e)=>
        {
            setTask({...task,[e.target.name] : e.target.value })
        }

    const handleSubmit = (e)=>
        {
            e.preventDefault()
            console.log(task)

            AXIOS.post('http://localhost:9000/task/addtask',task)
            .then((res)=>{
                console.log(res)
                alert(res.data)
            })
            //if error then,
            .catch(err=> console.log(err))
        }
    return(
        <>
            <form action="" style={{marginTop:'120px'}} method="post" onSubmit={handleSubmit}>
                <div className="wrapper2">

                    <div className="container1">
                        <label>Task Name: </label>
                        <input type="text" name="taskname" onChange={handleChange}></input>
                    </div>
                    <br/>

                    <div className="container1">
                        <label>Date: </label>
                        <input type="date" name="date" onChange={handleChange}></input>
                    </div>
                    <br/>

                    <div className="container1">
                        <label>Time: </label>
                        <input type="time" name="time" onChange={handleChange}></input>
                    </div>
                    <br/>

                    <div className="container1">
                        <button type="submit">Create</button>
                    </div>


                </div>
            </form>
        </>
    )
}
export default Addtask
