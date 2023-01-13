import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock , onAdd}) =>{

        const [contador,setContador] = useState(1);
        const [itemStock,setItemStock] = useState(stock);
        const [vendido, setVendido] = useState(false);

        const decrementar = () =>{
            if(contador > 1){
                setContador(contador - 1)
            }
        }

        const incrementar = () =>{
            if(contador < itemStock){
                setContador(contador + 1)
            }
        }

        const addToCart = (cantidad)=>{
            if(cantidad <= itemStock){
                setContador(1)
                setItemStock(itemStock - cantidad)
                setVendido(true)
                onAdd(cantidad)
                
            }
        }

        useEffect(()=>{

            setItemStock(stock)


        },[stock])

return (<div>
            <div className="row mb-3">
                <div className="col-md-5 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementar}> - </button>
                        <button type="button" className="btn btn-outline-primary">{contador}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementar}> + </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 text-center">
                    {vendido ?<Link type="button" className="btn btn-outline-primary" to={"/cart"}>Terminar Compra</Link>:<button type="button" id="boton1"className="btn btn-outline-primary" onClick={()=>{addToCart(contador)}}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )


}

export default ItemCount;