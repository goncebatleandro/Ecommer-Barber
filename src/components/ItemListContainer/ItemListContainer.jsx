import { useEffect, useState } from 'react';
import productos from '../../productos';
import { fetchData } from '../../FetchData';
import Item from '../Item/Item' 
import './ItemListContainer.css'
import Loader from '../Loader/Loader';


function ItemListContainer({greetings}) {

    const [todosLosProductos, setTodosLosProductos] = useState([]); //Base de datos local
    const [misProductos, setMisProductos] =  useState([]);
    const [loading, setLoading] = useState (true);

    const usarFiltro = (filtro) => {
        switch (filtro) {
            case "Ninguno":
                setMisProductos([]);
                break;
            case "Todos":
                setMisProductos(todosLosProductos);
                break;
            case "Menor precio":
                    setMisProductos(todosLosProductos.filter(el => el.precio < 100));
                    break;
                case "Mayor precio":
                    setMisProductos(todosLosProductos.filter(el => el.precio >= 100));
                    break;
            default:
                break;
        }
    }

    useEffect(() => {
        fetchData().then(response => {
            setTodosLosProductos(response);
            setMisProductos(response);
            setLoading(false);
        })
        .catch(err => console.error(err));
    },[])





    return (
        <>
                <h1 className='saludo'>{greetings}</h1>

                <div className='container-filter'>
                    <button onClick={() => usarFiltro("Todos")}>Todos</button>
                    <button onClick={() => usarFiltro("Menor precio")}>Menor precio</button>
                    <button onClick={() => usarFiltro("Mayor precio")}>Mayor precio</button>
                    <button onClick={() => usarFiltro("Ninguno")}>Ninguno</button>
                </div>

        <div className='container-cards'>
            {
                loading ? <Loader/> :
                misProductos.map((el, index) => {
                    return(
                        <Item key={el.id} nombre={el.nombre} precio={el.precio} />
                    )
                })
            }



           {/* <Item nombre={"Producto 1"} precio={100}/>
           <Item nombre={"Producto 2"} precio={150}/>
           <Item nombre={"Producto 3"} precio={200}/> */}
        </div>
        </>
    )
    
}

export default ItemListContainer;