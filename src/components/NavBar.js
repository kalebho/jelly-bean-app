import { Link } from 'react-router-dom'
import logo from '../images/JellyBean.jpg'
import '../NavBar.css'

function NavBar() {
    return(
        <div className='NavBar'>
            <img src={logo} className="NavBarLogo" alt='Logo' />
            <nav>
                <Link to="/"> <button>Home</button></Link>
                <Link to="/view"> <button>View all Jelly Beans</button></Link>
                <Link to="/add"> <button>Add Jelly Beans</button></Link>
                <Link to="/update"> <button>Update Jelly Beans</button></Link>
                <Link to="/delete"> <button>Delete Jelly Beans</button></Link>
            </nav>
        </div>
    )
}



export default NavBar