import { Link } from 'react-router-dom';
import './Item.css'

function Item({id, nombre, precio}) {

    function agregarAlCarrito(){
        console.log("Agregaste al carrito", nombre)
    }

    return (
            <div className='card'>
                  <h2>{nombre || "SIN STOCK"}</h2>
                  <h3>Precio: {precio || "NO DISPONIBLE PARA SU COMPRA"}</h3>
                  <button disabled={!nombre} onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
                  <Link to={`/detalle/${id}`}>
                  <button disabled={!nombre}>
                    Ver detalles
                    </button>
                    </Link>
           </div>
    )
    
}

export default Item;