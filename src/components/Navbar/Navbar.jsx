import './Navbar.css'

function Navbar() {
    return (
        <header>
                    <nav className='nav-bar'>
                            <p>Logo barberia</p>
                         <ul className='links'>
                            <li className='links-item'>Inicio</li>
                             <li className='links-item'>Tienda</li>
                            <li className='links-item'>Contacto</li>
                            </ul>
                            <p>Ícono del carrito (3)</p>
                    </nav>
        </header>
    )
    
}

export default Navbar;