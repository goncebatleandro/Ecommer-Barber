import './Item.css'

function Item({ nombre, precio }) {

    function agregarAlCarrito(){
        console.log("Agregaste al carrito", nombre)
    }

    return (
            <div className='card'>
                  <h2>{nombre || "SIN STOCK"}</h2>
                  <h3>Precio: {precio || "NO DISPONIBLE PARA SU COMPRA"}</h3>
                  <button disabled={!nombre} onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
           </div>
    )
    
}

export default Item;