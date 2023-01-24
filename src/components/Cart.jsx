import React,{ useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";


const Cart = ()=>{

    const {carrito,cartTotal,clear,sumTotal,removeItem} = useContext(CartContext);
    const {dark} = useContext(ThemeContext);
    
    if(cartTotal() === 0){

        return  (
            <div className={`container ${dark ? "text-white":""}`}>
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron Productos en el Carrito!</div>
                        <Link to={"/"} className="btn btn-primary">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
        
       }

       return( <div className={`${dark ? "text-white":""}`}>
                    <h1 className="text-center my-5">Carrito</h1>
                    <div className="container mb-4">
                        <div className="row space-evenly-telefono">
                            <div className="col-4 col0"></div>
                            <h4 className="col-3 fw-bold mb-3 col2">Producto</h4>
                            <h4 className="col-2 fw-bold mb-3 col2 text-center">Cantidad</h4>
                            <h4 className="col-3 fw-bold mb-3 col2">Precio</h4>
                        </div>

                    </div>
                   {carrito.map(prod =>(
                    <div className="container border-top" key={prod.id}>
                        
                            
                        <div className="row my-5 align-items-center">
                            <div className="col-4 text-center">
                                <img src={prod.img} width={120} alt={prod.nombre} />
                            </div>
                            <div className="col-3">
                                
                                <h5>{prod.nombre}</h5>    
                            </div>    
                            <div className="col-2 col1 text-center">
                                
                                <h5>{prod.cantidad}</h5>    
                            </div> 
                            <div className="col-2">
                                
                                <h5>${prod.precio * prod.cantidad}</h5>    
                            </div>
                            <div className="col-1 col2 text-end-telefono">
                                
                                <h5><Link onClick={() => {removeItem(prod.id)}} title={`Eliminar ${prod.nombre} Del Carrito`}><i className="fa-solid fa-trash" style={{fontSize:"25px",marginLeft:"15px"}}></i></Link></h5>    
                            </div>  
                        </div>
                    </div>
                   ))}
    
    
                    <div className="container mb-4 border">
                        <div className="row">
                            <div className="col-6 col2"></div>
                            <h4 className="col-3 fw-bold mb-4 col6">Total a pagar:</h4>
                            <h4 className="col-3 fw-bold mb-4 col4">${sumTotal()}</h4>
                        </div>

                    </div>
            
            <div className="container d-flex justify-content-end">
                <span className="btn btn-primary my-3" type="button" onClick={clear}>Vaciar Carrito</span>
            </div>
            <div className="container d-flex justify-content-end">
                <Link to={"/checkout"} className="btn btn-primary my-3">Terminar Compra</Link>
            </div>
                
            
        </div>
        
        )



    


}


export default Cart;