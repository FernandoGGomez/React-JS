import React,{ useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { ThemeContext } from "./context/ThemeContext";


const ItemDetail = ({item})=>{

    const {addItem } = useContext(CartContext);

    const {dark} = useContext(ThemeContext);

    const [itemStock,setItemStock] = useState(0);

    const onAdd = (cantidad)=>{

        setItemStock(itemStock - cantidad);
        addItem(item,cantidad);
       

    }

    useEffect(() => {

        setItemStock(item.stock);

    },[item]);

 return <div className={`row align-items-center col12 ${dark ? "text-white": ""}`}>

                <div className="col-5 col12">
                    <img className="img-fluid" src={item.img} alt={item.nombre} />
                   
                </div>
                
                <div className="col-7 col12 text-centrado">
                    <h2>{item.nombre}</h2>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio precio-telefono">${item.precio}</p>
                    <div><ItemCount stock={item.stock} onAdd={onAdd}/></div>
                </div>

                

        </div>


}


export default ItemDetail;


