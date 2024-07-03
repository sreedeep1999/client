//for fetching
import { useEffect,useState } from "react";
import axios from "axios";

export default function TodoLists(){

    const [list, setList] = useState([])        

    useEffect(()=>{
        axios.get('http://localhost:9000/task/fetchData')
       .then((res)=>{
        setList(res.data);        
})
    },[])

    function DeleteTask(id)
    {
       axios.delete(`http://localhost:9000/task/deleteTask/${id}`)
       .then((res)=>
    {
        alert(res.data)
    })
    }


    return(

            <>
            
            <h1>This is ToDoList Page</h1>
           <a href="/addtask">Add Task</a> 

           <table border={1}>
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th colSpan={2}>Action</th>
                    
                </tr>
            </thead>

            <tbody>
                {list.map((task)=>{
                    return(
                <tr>
                    
                    <td>{ task.taskname }</td>
                    <td> {task.date}</td>
                    <td> {task.time}</td>
                    <td>
                        <button onClick={()=>
                            {
                                DeleteTask(task._id)
                            }
                        }>Delete</button>
                    </td>
                    <td>

                    <a href={`/edit/${task._id}`}>Edit</a>

                     </td>
                    
                </tr>)}
                )}
                
            </tbody>

           </table>
            
            </>


    )
}

