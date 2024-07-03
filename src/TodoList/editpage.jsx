import { useState,useEffect,useRef } from "react"
import { useParams } from "react-router-dom"//to take the paramaeter from rounting in app.js
import AXIOS from 'axios'

function EditTask()

{
    

    const params=useParams()
    const RefElement=useRef()
   useEffect(()=>{
      AXIOS.get(`http://localhost:9000/task/editData/${params.id}`)//this id is from app.jsx
      .then((res)=>{
        const task=res.data[0];
        RefElement.current['taskname'].value=task.taskname;
        RefElement.current['date'].value=task.date;
        RefElement.current['time'].value=task.time;


      })

   },[])
   
   //******************* */
   //for updation which is similar to registeration

    const [task,setTask] = useState({})
   const handleChange = (e)=>
    {
        setTask({...task,[e.target.name] : e.target.value })
    }
    const handleSubmit = (e)=>
        {
            e.preventDefault()
            const header = {id:params.id}

            AXIOS.post('http://localhost:9000/task/updatetask',task,{headers:header})
            .then((res)=>
            {
                alert(res.data)
            })
            .catch(err=>console.log(err))
        }

       
 
    //********************* */


    return(
        <>
  {params.id}
     
           <form action="" style={{marginTop:'120px'}} ref={RefElement}  method="post" onSubmit={handleSubmit}>
            <div className="editpage">

            <div className="container3">
                <label>Task Name :</label>
                    <input type="text" name="taskname" onChange={handleChange}></input>
                </div>

                <div className="container3">
                <label>Date :</label>

                    <input type="date" name="date" onChange={handleChange}></input>
                </div>

                <div className="container3">
                <label>Time :</label>
                    <input type="time" name="time" onChange={handleChange}></input>
                </div>

                <div className="container3">
                    <button type="submit">Update</button>
                </div>

               </div>
           </form>
        </>
    )
}
export default EditTask