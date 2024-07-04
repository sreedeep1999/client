import { Routes,Route } from "react-router-dom"
import Homepage from "./TodoList/homepage"
import Navbars from "./TodoList/navbar"
import TodoLists from "./TodoList/todolists"
import Addtask from "./TodoList/addtask"
import EditTask from "./TodoList/editpage"
import Register from "./user/register"
import Login from "./user/login"




function App() {

  return (
    <>
    <Navbars/>

    <Routes>

            <Route path="/" element={<Homepage/>} >          </Route>

            <Route path='/navbar' element={<Navbars/>} >      </Route>

            <Route path="/todolists" element={<TodoLists/>}>  </Route>

            <Route path="/addtask" element={<Addtask/>}>      </Route>

            <Route path="/edit/:id" element={<EditTask/>}>   </Route>

            <Route path="/register" element={<Register/>}>    </Route>

            <Route path="/login" element={<Login/>}></Route>


    </Routes>
      

    </>
  )
}

export default App
