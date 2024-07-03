import './navbar.css'
export default function Navbars(){
    

    return(
        <>
        <div className="navbar">

                <a href="/" className='nav-link home-icon'>HOME</a>
                <a href="/todolists" className='nav-link todo-icon'>TO Do List</a>
                <a href='' className='navbar-brand logo'>Logo</a>
                <a href='' className='nav-link logout-icon'>Logout</a>
        </div>
        


        </>
    )


}