import { useEffect, useState } from 'react';
import { fetchData } from '../../FetchData';
import Item from '../Item/Item' 
import './ItemListContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const [todosLosProductos, setTodosLosProductos] = useState([]); //Base de datos local
    const [misProductos, setMisProductos] =  useState([]);
    const [loading, setLoading] = useState (true);
    const [productoActual, setProductoActual] = useState("");

    const {categoria} = useParams();

    // const usarFiltro = (filtro, id) => {
    //     switch (filtro) {
    //         case "Ninguno":
    //             setDetalleFiltrado(false);
    //             setMisProductos([]);
    //             break;
    //         case "Todos":
    //             setDetalleFiltrado(false);
    //             setMisProductos(todosLosProductos);
    //             break;
    //         case "Menor precio":
    //             setDetalleFiltrado(false);
    //             setMisProductos(todosLosProductos.filter(el => el.precio < 100));
    //                 break;
    //         case "Mayor precio":
    //             setDetalleFiltrado(false);
    //             setMisProductos(todosLosProductos.filter(el => el.precio >= 100));
    //                 break;
    //         case "Detalle":
    //             setDetalleFiltrado(true);
    //             setMisProductos(todosLosProductos.filter(el => el.id === id));
    //                 break;

    //         default:
    //             break;
    //     };
    // };

    // const verDetalle = (id) => {
    //     setProductoActual(id);
    //     setTimeout(() => {
    //         usarFiltro("Detalle");
    //     }, 500);   
    // };



    useEffect(() => {
        if(todosLosProductos.length === 0){
                fetchData().then(response => {
                    setTodosLosProductos(response);
                    if(categoria){
                        const productosFiltrados = response.filter(el => el.categoria === categoria);
                        setMisProductos(productosFiltrados);
                        setLoading(false);
                    } else {
                        setMisProductos(response);
                        setLoading(false);
                    };
              })
                .catch(err => console.error(err));
            } else {
                if(categoria){
                    const productosFiltrados = todosLosProductos.filter(el => el.categoria === categoria);
                    setMisProductos(productosFiltrados);
                } else {
                    setMisProductos(todosLosProductos);
                };
            }
        },[categoria]);


            
                    // fetchData().then(response => {
                    //     if(categoria){
                    //         const productosFiltrados = response.filter(el => el.categoria === categoria);
                    //         setTodosLosProductos(productosFiltrados);
                    //         setMisProductos(productosFiltrados); 
                    //     } else {
                    //         setTodosLosProductos(response);
                    //         setMisProductos(response);
                    //     }
                    //         setLoading(false);
                    // })
                    // .catch(err => console.error(err));
            
                    // fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json())
                    // .then(data => console.log(data))
                    // .catch(err => console.log(err));
            
                    // getAPI("https://jsonplaceholder.typicode.com/todos").then(data => console.log(data));
            
                    // postAPI("https://jsonplaceholder.typicode.com/posts", {
                    //     title: "Custom task",
                    //     userId: "2",
                    //     body: "To complete"
                    // }).then(data => console.log(data));

            

    return (
        <>
            {/* {

                !detalleFiltrado &&

                <div className='container-filter'>
                    <button onClick={() => usarFiltro("Todos")}>Todos</button>
                    <button onClick={() => usarFiltro("Menor precio")}>Menor precio</button>
                    <button onClick={() => usarFiltro("Mayor precio")}>Mayor precio</button>
                    <button onClick={() => usarFiltro("Ninguno")}>Ninguno</button>
                </div>
                
            }                */}

        <div className='container-cards'>
            {
                loading ? <Loader/> :
                    misProductos.map((el, index) => {
                        return(
                            <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio}/>
                        )
                })
            }
        </div>
        </>
    )
    
}

export default ItemListContainer;