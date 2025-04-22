import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './CartWidget.css'

function CartWidget() {

    const {carrito} = useAppContext();

    return (
            <Link to="/cart">
            <p className="bi bi-cart">({carrito.length})</p>
            </Link>
    );
    
};

export default CartWidget;