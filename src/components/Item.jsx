import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) =>{

   

    return (      
                    <div className="col-3 card align-items-center text-center me-1 mb-5 item">
                        <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                        <div className="col-8 mb-2 contenedor_imgen">
                            <img className="img-fluid mt-3" src={producto.img} alt={producto.nombre} />
                        </div>
                        <div className="col-8 ajustado">
                            <p className="h3">{producto.nombre}</p>
                            <p className="descripcion">{producto.descripcion.substring(0,40)}...</p>
                            <p className="precio">$ {producto.precio}</p>
                        </div>
                        </Link>
                    </div>

    )

}

export default Item;