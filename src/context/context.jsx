import { createContext, useContext, useState } from "react";
import productos from "../productos";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);
    const [contador, setContador] = useState(1);

    const agregarAlCarrito = (productos) => {
        if(carrito.some(el => el.id === productos.id)) {
            const newCarrito = carrito.map(el => {
                if(el.id === productos.id){
                    return {
                        ...el,
                        cantidad: el.cantidad + productos.cantidad
                    };
                } else {
                    return el;
                }
            });

            setCarrito(newCarrito);

        } else {
            setCarrito ([...carrito, productos]);
        };
        setContador(1);
        
    };

    return (
        <AppContext.Provider value={{carrito, agregarAlCarrito, contador, setContador}}>
            {props.children}
        </AppContext.Provider>
    );
};