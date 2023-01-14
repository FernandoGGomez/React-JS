import React,{ useState } from "react";
import { Link,NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    const [menu,setMenu]= useState(false);

    const opcionesMenu = () => { //este metodo es para acivar o desactivar el menu desplegable

        setMenu(!menu);

    }

    return (

            <div className="container contenedor-nav">
                <div className="row">
                    <div className="col-7">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to={"/"}><img src="/images/logo.png" alt="McDonalds" width="100" /></Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse text-center" id="navbarNav">
                                <NavLink className="nav-link"  aria-current="page" to={"/"}>Todos los Productos</NavLink>
                                <div className=""  onClick={opcionesMenu}>Ver más
                                    <ul className={`navbar-nav menu ${menu ? "desplegado":""}`}>
                                    
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to={"/categoria/procesador"}>Procesadores</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/categoria/placa_video"}>Placas de video</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/categoria/placa_madre"}>Motherboards</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/categoria/Nosotros"}>Nosotros</NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-5  d-flex align-items-center justify-content-end">
                        <CartWidget/>
                        </div>
                </div>
            </div>
    )
}

export default NavBar