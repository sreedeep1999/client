import './navbar.css'
export default function Navbars(){
    

    return(
        <>
        <div className="navbar">

                <a href="/" className='nav-link home-icon'>HOME</a>
                <a href="/todolists" className='nav-link todo-icon'>TO Do List</a>
                <a href='/register'>SignUp</a>
                <a href='/login'>SignIn</a>

                <a href='' className='nav-link logout-icon'>Logout</a>
        </div>
        


        </>
    )


}