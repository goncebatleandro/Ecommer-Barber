import { useEffect, useState } from 'react';
import './ItemDetail.css';
import { fetchData } from '../../FetchData';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemDetail() {

    const {id} = useParams();

    const [detalle, setDetalle] = useState(null);

    function agregarAlCarrito(){
        console.log("Agregaste al carrito", nombre)
    };


    useEffect(()  =>{   
      fetchData().then(response => {
          const detalleDelProducto = response.find(el => el.id === parseInt(id));
          setDetalle(detalleDelProducto);
  })

    .catch(err => console.error(err));


    },[id]);

    return (
      
        !detalle ? <Loader/>
          :
          <div className='card-detail'>
                  <h2>{detalle.nombre || "SIN STOCK"}</h2>
                  <h3>Precio: ${detalle.precio || "NO DISPONIBLE PARA SU COMPRA"}</h3>
                  <p>Descripción: {detalle.descripcion}</p>
                  {
                    detalle.stock > 0 &&
                    <p>Quedan: {detalle.stock} unidades</p>
                }
                  {
                    detalle.oferta && <p>PRODUCTO EN OFERTA</p>
                }
                  <button disabled={detalle.stock === 0} onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
                  <Link to="/">
                  <button >Volver al inicio</button>
                  </Link>
           </div>
    );
    
};

export default ItemDetail;