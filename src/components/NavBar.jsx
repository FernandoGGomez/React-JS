import React,{ useState ,useContext} from "react";
import { Link,NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import {ThemeContext} from "./context/ThemeContext";

const NavBar = () => {
    let {tema,dark} = useContext(ThemeContext);
    const [menu,setMenu]= useState(false);
    

    const opcionesMenu = () => { //este metodo es para acivar o desactivar el menu desplegable

        setMenu(!menu);

    }

    return (

            <div className={`container contenedor-nav ${dark ? "dark-nav":"light-nav"}`}>
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
                                <div className="ver-mas"  onClick={opcionesMenu}>Ver más
                                    <ul className={`navbar-nav menu ${menu ? "desplegado":""} ${dark?"dark-bg":"light-nav"}`}>
                                    
                                        <li className="nav-item">
                                            <NavLink className={`${dark?"nav-link":"nav-link nav-link-light"}`} aria-current="page" to={"/categoria/procesador"}>Procesadores</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={`${dark?"nav-link":"nav-link nav-link-light"}`} to={"/categoria/placa_video"}>Placas de video</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className={`${dark?"nav-link":"nav-link nav-link-light"}`} to={"/categoria/placa_madre"}>Motherboards</NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    
                    <div className="col-5  d-flex align-items-center justify-content-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" onClick={tema} fill="currentColor" className={`bi bi-moon me-5 ${dark ?"d-none":""}`} viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" onClick={tema} name="algo"fill="currentColor" className={`bi bi-brightness-high me-5 ${dark ?"":"d-none"}`} viewBox="0 0 16 16">
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                        </svg>
                    
                        <CartWidget/>

                    </div>
                </div>
            </div>
    )
}

export default NavBar;