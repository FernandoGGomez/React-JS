import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {

    const {cartTotal} = useContext(CartContext);
    

    return (
        
        cartTotal > 0 ?<Link type="button" className="btn btn-primary position-relative" to={"/cart"}>
        <img src="/images/carrito.png" alt="Carrito" width="32" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()} </span>
    </Link>:<Link type="button" className="btn btn-primary position-relative" to={"/cart"}>
            <img src="/images/carrito.png" alt="Carrito" width="32" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()} </span>
        </Link>
        
    )
}

export default CartWidget;