import './Item.css'

function Item(props) {

    function agregarAlCarrito(){
        console.log("Agregaste al carrito", props)
    }

    return (
            <div className='card'>
                  <h2>{props.nombre }</h2>
                  <h3>Precio: ${props.precio}</h3>
                  <button onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
           </div>
    )
    
}

export default Item;