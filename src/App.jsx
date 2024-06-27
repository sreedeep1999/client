import { Routes,Route } from "react-router-dom"
import Homepage from "./TodoList/homepage"
import Navbars from "./TodoList/navbar"
import TodoLists from "./TodoList/todolists"


function App() {

  return (
    <>
    <Navbars/>

    <Routes>

            <Route path="/" element={<Homepage/>} >     </Route>

            <Route path='/navbar' element={<Navbars/>} > </Route>

            <Route path="/todolists" element={<TodoLists/>}>  </Route>


    </Routes>
      

    </>
  )
}

export default App
