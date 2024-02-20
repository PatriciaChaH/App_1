import React, {useState} from "react";
import '../styles/contador.css';


export default function Contador (props){
    const [numero, setNumero] = useState(0);

    const aumentar =() =>{
        setNumero(numero+1);
        console.log(numero);
    };


    return(
            <button className='botonredes' onClick={aumentar}>{numero}{props.children}
            </button>
        
    )
}