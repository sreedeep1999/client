import { Routes,Route } from "react-router-dom"
import Homepage from "./TodoList/homepage"
import Navbars from "./TodoList/navbar"
import TodoLists from "./TodoList/todolists"
import Addtask from "./TodoList/addtask"
import EditTask from "./TodoList/editpage"



function App() {

  return (
    <>
    <Navbars/>

    <Routes>

            <Route path="/" element={<Homepage/>} >     </Route>

            <Route path='/navbar' element={<Navbars/>} > </Route>

            <Route path="/todolists" element={<TodoLists/>}>  </Route>

            <Route path="/addtask" element={<Addtask/>}>  </Route>

            <Route path="/edit/:id" element={<EditTask/>}></Route>




    </Routes>
      

    </>
  )
}

export default App
