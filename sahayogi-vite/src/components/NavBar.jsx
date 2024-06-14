import './NavBar.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container'>

            <nav>
                <img src={logo} alt=" " className='logo' />
                <ul>
                    <li>
                        <Link to={'/'} className='btn'>Home</Link>
                    </li>
                    <li>
                        <Link to={"/card"} className='btn'>AboutUs</Link>
                    </li>
                    <li>
                        <button className='btn'>Contact</button>
                    </li>
                    <li>
                        <button className='btn'>Servicess</button>
                    </li>
                    <li><Link to={'/login'} className='btn'>Log In</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
