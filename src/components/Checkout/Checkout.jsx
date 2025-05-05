import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import './Checkout.css'
import { useContext, useState } from 'react';
import { db } from '../../firebaseConfig';
import {addDoc, collection} from "firebase/firestore"
import context from 'react-bootstrap/esm/AccordionContext';
import Cart from '../Cart/Cart';

function Checkout() {

    
    const navigate = useNavigate();

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

    const {carrito} = useAppContext();

    const funcionFormulario = (evento) => {
        evento.preventDefault();
        let ordersCollection = collection(db, "orders");

        let order = {
            buyer: formData,
            items: carrito,
        };
        addDoc ( ordersCollection, order);
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
              <form onSubmit={funcionFormulario}>
                    <input type="text" placeholder='Nombre' name='nombre' value={formData.nombre} onChange={modificarInput}/>
                    <input type="text" placeholder='Correo' name='correo' value={formData.correo} onChange={modificarInput}/>
                    <input type="text" placeholder='Telefono' name='telefono' value={formData.telefono} onChange={modificarInput}/>
                    <input type="submit" value="Enviar"/>
              </form>
           </div>
    );
    
};

export default Checkout;