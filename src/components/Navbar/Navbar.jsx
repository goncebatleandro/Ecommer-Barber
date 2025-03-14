import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWitged';
import './Navbar.css'

function Navbar() {
    return (
        <header>
                    <nav className='nav-bar'>
                            <p>Logo barberia</p>
                         <ul className='links'>
                                <li className='links-item'>
                                    <Link to="/">
                                        Productos
                                    </Link>
                                        </li>
                                <li className='links-item'>
                                <Link to="/categoria/pomadas">
                                        Pomadas
                                    </Link>
                                        </li>
                                    <li className='links-item'>
                                    <Link to="/categoria/texturizadores">
                                        Texturizadores
                                    </Link>
                                        </li>
                            </ul>
                            <CartWidget/>
                    </nav>
        </header>
    )
    
}

export default Navbar;