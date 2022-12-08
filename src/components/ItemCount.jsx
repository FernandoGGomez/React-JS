import React,{useState } from "react";

const ItemCount = ({stock}) =>{

        const[contador,setContador] = useState(1);

        const decrementar = () =>{
            if(contador > 1){
                setContador(contador - 1)
            }
        }

        const incrementar = () =>{
            if(contador < stock){
                setContador(contador + 1)
            }
        }

        const onAdd = () => {
            if (stock > 0) {
                console.log("Agregaste: " + contador + " Productos al Carrito!");
            }
        }

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
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )


}

export default ItemCount;