import React,{ useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";


const ItemDetail = ({item})=>{
    const {addItem } = useContext(CartContext);

    const [itemStock,setItemStock] = useState(0);

    const onAdd = (cantidad)=>{

        setItemStock(itemStock - cantidad);
        addItem(item,cantidad);
        localStorage.setItem('carrito',JSON.stringify([item]))
       

    }

    useEffect(() => {

        setItemStock(item.stock);

    },[item]);

 return <div className="row align-items-center">

                <div className="col-5 ">
                    <img src={item.img} alt={item.nombre} />
                </div>
                
                <div className="col-7">
                    <h2>{item.nombre}</h2>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio">$ {item.precio}</p>
                    <div><ItemCount stock={item.stock} onAdd={onAdd}/></div>
                </div>

                

        </div>


}


export default ItemDetail;


