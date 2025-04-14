import { Link } from 'react-router-dom';
import './Item.css'
import { useAppContext } from '../../context/context';

function Item({id, nombre, precio}) {

    const { agregarAlCarrito } = useAppContext();


    return (
            <div className='card'>
                  <h2>{nombre || "SIN STOCK"}</h2>
                  <h3>Precio: {precio || "NO DISPONIBLE PARA SU COMPRA"}</h3>
                  <button disabled={!nombre} onClick={() => agregarAlCarrito({id, nombre, precio, cantidad: 1})}>Agregar al carrito</button>
                  <Link to={`/detalle/${id}`}>
                  <button disabled={!nombre}>
                    Ver detalles
                    </button>
                    </Link>
           </div>
    )
    
}

export default Item;