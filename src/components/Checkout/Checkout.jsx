import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Checkout.css'
import { useContext, useState } from 'react';
import { db } from '../../firebaseConfig';
import {addDoc, collection, updateDoc} from "firebase/firestore"
import context from 'react-bootstrap/esm/AccordionContext';
import Cart from '../Cart/Cart';

function Checkout() {

    const { carrito, limpiarCarrito } = useAppContext();
    
    const navigate = useNavigate();

    const [orderId, setOrderId] = useState(null);

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        telefono: "",
    });

    const modificarInput = (evento) => {
        const {value, name} = evento.target;
        setFormData ({
                ...formData,
                [name]: value,
        });
    };

    const funcionFormulario = (evento) => {
        evento.preventDefault();
        let ordersCollection = collection(db, "orders");
    
        let order = {
            buyer: formData,
            items: carrito.map(producto => ({
                id: producto?.id ?? "sin-id",
                title: producto?.title ?? "sin-título",
                price: producto?.price ?? 0,
                quantity: producto?.cantidad ?? 1,
            })),
            total: carrito.reduce((acc, prod) => acc + (prod.price ?? 0) * (prod.cantidad ?? 1), 0),
            date: new Date()
        };
    
        console.log("Orden final guardada:", order);
        addDoc(ordersCollection, order).then(res => {
            setOrderId(res.id);
            limpiarCarrito();
        });

        let productsCollection = collection(db, "productos")
        order.items.forEach (producto =>{
            let refDoc = doc(productsCollection, producto.id)
            updateDoc(refDoc, {stock: producto.stock - producto.quantity })
        });
    };

    // const crearOrden = (evento) => {
    //     evento.preventDefault();
    //     console.log("Orden creada", formData);
    //     setFormData({
    //         nombre: "",
    //         correo: "",
    //         telefono: "",
    //     });

    //     setTimeout(() => {
    //         navigate("/");
    //     }, 1000);
    // }

    return (
           <div style={{display: "flex", flexDirection: "column"}}>

            {
                orderId ? <h2>Gracias por la compra en Aviles-baber, tu comprobante es : {orderId}</h2> : 
                <form onSubmit={funcionFormulario}>
                    <input type="text" placeholder='Nombre' name='nombre' value={formData.nombre} onChange={modificarInput}/>
                    <input type="text" placeholder='Correo' name='correo' value={formData.correo} onChange={modificarInput}/>
                    <input type="text" placeholder='Telefono' name='telefono' value={formData.telefono} onChange={modificarInput}/>
                    <input type="submit" value="Enviar"/>
              </form>
            }

           </div>
    );
    
};

export default Checkout;