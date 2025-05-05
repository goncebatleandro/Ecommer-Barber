import { useEffect, useState } from 'react';
import './ItemDetail.css';
import { fetchData } from '../../FetchData';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppContext } from '../../context/context';
import Contador from '../Contador/Contador';
import { db } from '../../firebaseConfig';
import {collection, getDoc, doc } from "firebase/firestore";

function ItemDetail() {

    const {id} = useParams();

    const [detalle, setDetalle] = useState(null);

    const { agregarAlCarrito, contador } = useAppContext();

    useEffect(()  =>{   
      let refCollection = collection(db, "productos");
      let refDoc = doc(refCollection, id);
      getDoc(refDoc).then(res => {
        setDetalle ({id: res.id, ...res.data()});
      })
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
                {
                  detalle.stock && <Contador stock={detalle.stock} />
                }
                  <button disabled={detalle.stock === 0} onClick={() => agregarAlCarrito({id: detalle.id, nombre: detalle.nombre, precio: detalle.precio, cantidad: contador})}>Agregar al carrito</button>
                  <Link to="/">
                  <button >Volver al inicio</button>
                  </Link>
           </div>
    );
    
};

export default ItemDetail;