import { useAppContext } from '../../context/context';
import './CartWidget.css'

function CartWidget() {

    const {carrito} = useAppContext();

    return (
            <p onClick={() => console.log(carrito)} className="bi bi-cart">({carrito.length})</p>
    );
    
};

export default CartWidget;