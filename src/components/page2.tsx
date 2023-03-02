import React, { useState } from 'react';

export default function Page2 () {

    const [datosUsuario, setDatosUsuario] = useState(
        window.localStorage.getItem('Usuario')    
    );
  

    return(
        <h1 > {datosUsuario}</h1>
    );
}