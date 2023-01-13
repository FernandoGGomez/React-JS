import React,{ useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Cart = ()=>{

    const {carrito,cartTotal,clear,sumTotal,removeItem} = useContext(CartContext);

    
    if(cartTotal() === 0){

        return  (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron Productos en el Carrito!</div>
                        {/* <button type="button" onClick={cargarCarrito()}></button> */}
                        <Link to={"/"} className="btn btn-primary">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
        
       }

       return( <div>
                    <h1 className="text-center">Carrito</h1>
                    <div className="container mb-4">
                        <div className="row">
                            <div className="col-4"></div>
                            <h4 className="col-3 fw-bold mb-3">Producto</h4>
                            <h4 className="col-2 fw-bold mb-3 text-center">Cantidad</h4>
                            <h4 className="col-3 fw-bold mb-3">Precio</h4>
                        </div>

                    </div>
                   {carrito.map(prod =>(
                    <div className="container border-top" key={prod.id}>
                        
                            
                        <div className="row mb-5 align-items-center">
                            <div className="col-4 text-center">
                                <img src={prod.img} width={120} alt={prod.nombre} />
                            </div>
                            <div className="col-3">
                                
                                <h5>{prod.nombre}</h5>    
                            </div>    
                            <div className="col-2 text-center">
                                
                                <h5>{prod.cantidad}</h5>    
                            </div> 
                            <div className="col-2">
                                
                                <h5>${prod.precio * prod.cantidad}</h5>    
                            </div>
                            <div className="col-1">
                                
                                <h5><Link onClick={() => {removeItem(prod.id)}} title={`Eliminar ${prod.nombre} Del Carrito`}><i className="fa-solid fa-trash"></i></Link></h5>    
                            </div>  
                        </div>
                    </div>
                   ))}
    
    {/* {localStorage.setItem('carrito',JSON.stringify(carrito))} */}
                    <div className="container mb-4 border">
                        <div className="row">
                            <div className="col-6"></div>
                            <h4 className="col-3 fw-bold mb-4">Total a pagar:</h4>
                            <h4 className="col-3 fw-bold mb-4">${sumTotal()}</h4>
                        </div>

                    </div>
            
            <div className="container d-flex justify-content-end">
                <span className="btn btn-primary" type="button" onClick={clear}>Vaciar Carrito</span>
            </div>
            <div className="container d-flex justify-content-end">
                <Link to={"/checkout"} className="btn btn-primary">Terminar Compra</Link>
            </div>
                
            
        </div>
        
        )



    


}


export default Cart;