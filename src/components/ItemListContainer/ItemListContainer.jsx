import { useEffect, useState } from 'react';
import { fetchData } from '../../FetchData';
import Item from '../Item/Item' 
import './ItemListContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import productos from '../../productos';


function ItemListContainer() {

    const [todosLosProductos, setTodosLosProductos] = useState([]); //Base de datos local
    const [misProductos, setMisProductos] =  useState([]);
    const [productoActual, setProductoActual] = useState("");
    const [loading, setLoading] = useState (true);


    const {categoria} = useParams();

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

        useEffect (()=> {
            
            let productsCollection = collection(db, "productos");
            let consulta = productsCollection
            if( categoria ){
                let productsCollectionFiltered = query( 
                    productsCollection, 
                    where("categoria", "==", categoria));
                consulta = productsCollectionFiltered;
            }
            
            getDocs(consulta).then((res)=>{
            let nuevoArray = res.docs.map((elemento)=> {
                    return {id: elemento.id, ...elemento.data()}
                });
                setMisProductos(nuevoArray);
            });
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

// const cargarProductos = () => {
//     let refCollection = collection(db, "productos");

//     productos.forEach((elemento )=>{
//         addDoc(refCollection, elemento  );
//     })
// } ;
            

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
            {/* <button onClick={cargarProductos}>Cargar</button> */}
        </div>
        </>
    )
    
}

export default ItemListContainer;