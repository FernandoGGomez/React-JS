import React,{ useState, createContext } from "react";
import { useEffect } from "react";


export const CartContext = createContext();

const CartContextProvider =({children})=>{

    const [carrito,setCarrito] = useState([]);

    const car = JSON.parse(localStorage.getItem('carrito')); 

    useEffect(()=>{

        if(car !== null){ //si tengo carrito en local storage

            setCarrito(car);   //lo seteo en carrito

    
        }

        

    },[])
    

    const isInCart=(id)=>{ //Compruebo si el producto está en el carrito

        return carrito.some(prod => prod.id === id);

    }

    const addItem = (item, cantidad) => { //Función que agrega el producto al carrito

        if(isInCart(item.id)){ //si el producto se encuentra en el carrito

            let i = carrito.findIndex(prod => prod.id === item.id) //encuentro su posición
            carrito[i].cantidad += cantidad; 
            setCarrito([...carrito]);
            localStorage.setItem('carrito',JSON.stringify([...carrito]))

            
        }else{

            setCarrito([...carrito,{...item,cantidad:cantidad}]); //si no se encuentra seteo el objeto al carrito
            localStorage.setItem('carrito',JSON.stringify([...carrito,{...item,cantidad:cantidad}]))


        }
    
     
    
}

const sumTotal = () => {
    return carrito.reduce((total, item) => total += item.cantidad * item.precio, 0);
}


const cartTotal = () => {
    return carrito.reduce((total, item) => total += item.cantidad, 0);
}

const clear = () => {

    setCarrito([]);
    localStorage.removeItem('carrito')

}

const removeItem = (id) => {
    const productos = carrito.filter(prod => prod.id !== id);
    setCarrito([...productos]);
}
    return (
        <CartContext.Provider value={{addItem,carrito,clear,cartTotal,sumTotal,removeItem}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;