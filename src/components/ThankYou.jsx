import React from "react";
import { Link,useParams } from "react-router-dom";

const TankYou = () =>{

    const {id} = useParams();

    return <div className="text-center">
            <h1>Gracias</h1>
            <div className="container alert alert-primary text-center" role="alert" >El ID de su compra es: <b>{id}</b></div>

            <Link to={"/"} >Volver a la página principal</Link>
        </div>

}

export default TankYou;