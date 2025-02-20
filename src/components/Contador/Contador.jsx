import { useState } from 'react';
import './Contador.css'


function Contador() {

    const [numero, setNumero] = useState(0);

    const modificarNumero = (operacion) => {
        if(operacion === "+"){
            setNumero(numero + 1);
        } else {
            setNumero(numero - 1);
        };
    };

    return (
        <div className='contador-container'>
            <h1>Contador</h1>
            <div className='buttons-container'>
                <button className='btn-contador' onClick={() => modificarNumero("-")}>-</button>
                <p id='numero'>{numero}</p>
                <button className='btn-contador' onClick={() => modificarNumero("+")}>+</button>
            </div>
        </div>
    )
    
}

export default Contador;